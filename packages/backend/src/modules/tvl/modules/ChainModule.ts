import { Logger } from '@l2beat/backend-tools'
import { BlockExplorerClient } from '@l2beat/shared'
import {
  AmountConfigEntry,
  EscrowEntry,
  ProjectId,
  TotalSupplyEntry,
  capitalizeFirstLetter,
  notUndefined,
} from '@l2beat/shared-pure'
import { groupBy } from 'lodash'
import { ChainTvlConfig, TvlConfig } from '../../../config/Config'
import { Peripherals } from '../../../peripherals/Peripherals'
import { MulticallClient } from '../../../peripherals/multicall/MulticallClient'
import { RpcClient } from '../../../peripherals/rpcclient/RpcClient'
import { IndexerService } from '../../../tools/uif/IndexerService'
import { Configuration } from '../../../tools/uif/multi/types'
import { BlockTimestampIndexer } from '../indexers/BlockTimestampIndexer'
import { ChainAmountIndexer } from '../indexers/ChainAmountIndexer'
import { HourlyIndexer } from '../indexers/HourlyIndexer'
import { ValueIndexer } from '../indexers/ValueIndexer'
import { AmountService, ChainAmountConfig } from '../services/AmountService'
import { BlockTimestampProvider } from '../services/BlockTimestampProvider'
import { ValueService } from '../services/ValueService'
import { ConfigMapping } from '../utils/ConfigMapping'
import { SyncOptimizer } from '../utils/SyncOptimizer'
import { createAmountId } from '../utils/createAmountId'
import { PriceModule } from './PriceModule'

interface ChainModule {
  start: () => Promise<void> | void
}

export function createChainModules(
  config: TvlConfig,
  peripherals: Peripherals,
  logger: Logger,
  hourlyIndexer: HourlyIndexer,
  syncOptimizer: SyncOptimizer,
  indexerService: IndexerService,
  priceModule: PriceModule,
  configMapping: ConfigMapping,
): ChainModule[] {
  return config.chains
    .map((chain) =>
      createChainModule(
        config,
        chain,
        config.amounts,
        peripherals,
        logger,
        hourlyIndexer,
        syncOptimizer,
        indexerService,
        priceModule,
        configMapping,
      ),
    )
    .filter(notUndefined)
    .flat()
}

function createChainModule(
  config: TvlConfig,
  chainConfig: ChainTvlConfig,
  amounts: AmountConfigEntry[],
  peripherals: Peripherals,
  logger: Logger,
  hourlyIndexer: HourlyIndexer,
  syncOptimizer: SyncOptimizer,
  indexerService: IndexerService,
  priceModule: PriceModule,
  configMapping: ConfigMapping,
): ChainModule | undefined {
  const chain = chainConfig.chain

  const name = `${capitalizeFirstLetter(chain)}TvlModule`
  if (!chainConfig.config) {
    logger.info(`${name} disabled`)
    return
  }
  logger = logger.tag(chain)

  const rpcClient = peripherals.getClient(RpcClient, {
    url: chainConfig.config.providerUrl,
    callsPerMinute: chainConfig.config.providerCallsPerMinute,
  })

  const options =
    chainConfig.config.blockExplorerConfig === undefined
      ? undefined
      : chainConfig.config.blockExplorerConfig.type === 'etherscan'
        ? {
            type: 'Etherscan' as const,
            apiKey: chainConfig.config.blockExplorerConfig.etherscanApiKey,
            url: chainConfig.config.blockExplorerConfig.etherscanApiUrl,
            maximumCallsForBlockTimestamp: 3,
          }
        : {
            type: 'Blockscout' as const,
            url: chainConfig.config.blockExplorerConfig.blockscoutApiUrl,
            maximumCallsForBlockTimestamp: 10,
          }

  const blockExplorerClient = options
    ? peripherals.getClient(BlockExplorerClient, options)
    : undefined

  const blockTimestampProvider = new BlockTimestampProvider({
    blockExplorerClient,
    client: rpcClient,
    logger,
  })

  const blockTimestampIndexer = new BlockTimestampIndexer({
    logger,
    tag: chain,
    parents: [hourlyIndexer],
    minHeight: chainConfig.config.minBlockTimestamp.toNumber(),
    indexerService,
    chain,
    blockTimestampProvider,
    db: peripherals.database,
    syncOptimizer,
  })

  const amountService = new AmountService({
    rpcClient: rpcClient,
    multicallClient: new MulticallClient(
      rpcClient,
      chainConfig.config.multicallConfig,
    ),
    logger: logger.tag(chain),
  })

  const escrowsAndTotalSupplies = amounts
    .filter((a) => a.chain === chain)
    .filter(
      (a): a is ChainAmountConfig =>
        a.type === 'escrow' || a.type === 'totalSupply',
    )

  const chainMinTimestamp = chainConfig.config.minBlockTimestamp

  const configurations: Configuration<EscrowEntry | TotalSupplyEntry>[] =
    escrowsAndTotalSupplies.map((a) => ({
      id: createAmountId(a),
      properties: a,
      minHeight: a.sinceTimestamp.lt(chainMinTimestamp)
        ? chainMinTimestamp.toNumber()
        : a.sinceTimestamp.toNumber(),
      maxHeight: a.untilTimestamp?.toNumber() ?? null,
    }))

  if (configurations.length === 0) {
    return undefined
  }

  const chainAmountIndexer = new ChainAmountIndexer({
    logger,
    tag: chain,
    parents: [blockTimestampIndexer],
    indexerService,
    configurations,
    chain,
    amountService,
    serializeConfiguration,
    syncOptimizer,
    db: peripherals.database,
  })

  const perProject = groupBy(escrowsAndTotalSupplies, 'project')

  const valueIndexers: ValueIndexer[] = []
  const parents = [priceModule.descendant, chainAmountIndexer]
  for (const [project, amountConfigs] of Object.entries(perProject)) {
    const priceConfigs = new Set(
      amountConfigs.map((c) => configMapping.getPriceConfigFromAmountConfig(c)),
    )

    const valueService = new ValueService(peripherals.database)

    const minHeight = Math.min(
      ...amountConfigs.map((c) => c.sinceTimestamp.toNumber()),
    )
    const maxHeight = Math.max(
      ...amountConfigs.map((c) => c.untilTimestamp?.toNumber() ?? Infinity),
    )

    const indexer = new ValueIndexer({
      valueService,
      db: peripherals.database,
      priceConfigs: [...priceConfigs],
      amountConfigs,
      project: ProjectId(project),
      dataSource: chain,
      syncOptimizer,
      parents,
      tag: `${project}_${chain}`,
      indexerService,
      logger,
      minHeight,
      maxHeight,
      maxTimestampsToProcessAtOnce: config.maxTimestampsToAggregateAtOnce,
    })

    valueIndexers.push(indexer)
  }

  return {
    start: async () => {
      await blockTimestampIndexer.start()
      await chainAmountIndexer.start()

      for (const indexer of valueIndexers) {
        await indexer.start()
      }
    },
  }
}

function serializeConfiguration(value: EscrowEntry | TotalSupplyEntry): string {
  if (value.type === 'escrow') {
    const obj = {
      ...getBaseEntry(value),
      address: value.address.toString(),
      escrowAddress: value.escrowAddress.toString(),
      type: value.type,
    }

    return JSON.stringify(obj)
  }

  if (value.type === 'totalSupply') {
    const obj = {
      ...getBaseEntry(value),
      address: value.address.toString(),
      type: value.type,
    }

    return JSON.stringify(obj)
  }

  throw new Error('Unknown type')
}

function getBaseEntry(value: EscrowEntry | TotalSupplyEntry) {
  return {
    ...value,
    chain: value.chain,
    project: value.project.toString(),
    source: value.source,
    sinceTimestamp: value.sinceTimestamp.toNumber(),
    ...(Object.keys(value).includes('untilTimestamp')
      ? { untilTimestamp: value.untilTimestamp?.toNumber() }
      : {}),
    includeInTotal: value.includeInTotal,
    decimals: value.decimals,
    symbol: value.symbol,
    isAssociated: value.isAssociated,
  }
}
