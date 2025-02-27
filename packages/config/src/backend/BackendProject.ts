import { assert } from '@l2beat/backend-tools'
import {
  SHARP_SUBMISSION_ADDRESS,
  SHARP_SUBMISSION_SELECTOR,
  TrackedTxConfigEntry,
  createTrackedTxId,
} from '@l2beat/shared'
import {
  EthereumAddress,
  ProjectId,
  Token,
  UnixTime,
} from '@l2beat/shared-pure'
import { ScalingProjectEscrow } from '../common/ScalingProjectEscrow'
import { ScalingProjectTransactionApi } from '../common/ScalingProjectTransactionApi'
import {
  Bridge,
  Layer2,
  Layer2FinalityConfig,
  Layer2LivenessConfig,
  Layer2TxConfig,
  Layer3,
} from '../projects'
import { tokenList } from '../tokens'
import { chainConverter } from './utils'

export interface BackendProject {
  projectId: ProjectId
  slug: string
  isArchived?: boolean
  type: 'layer2' | 'bridge' | 'layer3'
  isUpcoming?: boolean
  escrows: BackendProjectEscrow[]
  transactionApi?: ScalingProjectTransactionApi
  trackedTxsConfig?: TrackedTxConfigEntry[] | undefined
  livenessConfig?: Layer2LivenessConfig
  finalityConfig?: Layer2FinalityConfig
  associatedTokens?: string[]
}

export interface BackendProjectEscrow {
  address: EthereumAddress
  sinceTimestamp: UnixTime
  untilTimestamp?: UnixTime
  tokens: Token[]
  chain: string
  includeInTotal?: boolean
  source?: ScalingProjectEscrow['source']
  bridge?: {
    name: string
    slug?: string
    warning?: string
  }
}

export function layer2ToBackendProject(layer2: Layer2): BackendProject {
  return {
    projectId: layer2.id,
    slug: layer2.display.slug,
    type: 'layer2',
    isUpcoming: layer2.isUpcoming,
    isArchived: layer2.isArchived,
    escrows: layer2.config.escrows.map(toProjectEscrow),
    transactionApi: layer2.config.transactionApi,
    trackedTxsConfig: toBackendTrackedTxsConfig(
      layer2.id,
      layer2.config.trackedTxs,
    ),
    livenessConfig: layer2.config.liveness,
    finalityConfig:
      layer2.config.finality !== 'coming soon'
        ? layer2.config.finality
        : undefined,
    associatedTokens: layer2.config.associatedTokens,
  }
}

export function bridgeToBackendProject(bridge: Bridge): BackendProject {
  return {
    projectId: bridge.id,
    slug: bridge.display.slug,
    type: 'bridge',
    escrows: bridge.config.escrows.map(toProjectEscrow),
    associatedTokens: bridge.config.associatedTokens,
  }
}

function toBackendTrackedTxsConfig(
  projectId: ProjectId,
  configs: Layer2TxConfig[] | undefined,
): TrackedTxConfigEntry[] | undefined {
  if (configs === undefined) return

  return configs.flatMap((config) =>
    config.uses.map((use) => {
      const base = {
        projectId,
        sinceTimestamp: config.query.sinceTimestamp,
        untilTimestamp: config.query.untilTimestamp,
        type: use.type,
        subtype: use.subtype,
        costMultiplier:
          use.type === 'l2costs' ? config._hackCostMultiplier : undefined,
      }

      switch (config.query.formula) {
        case 'functionCall': {
          const withParams = {
            ...base,
            params: {
              formula: 'functionCall',
              address: config.query.address,
              selector: config.query.selector,
            },
          } as const
          return {
            ...withParams,
            id: createTrackedTxId(withParams),
          }
        }
        case 'transfer': {
          const withParams = {
            ...base,
            params: {
              formula: 'transfer',
              from: config.query.from,
              to: config.query.to,
            },
          } as const
          return {
            ...withParams,
            id: createTrackedTxId(withParams),
          }
        }
        case 'sharpSubmission': {
          const withParams = {
            ...base,
            params: {
              formula: 'sharpSubmission',
              address: SHARP_SUBMISSION_ADDRESS,
              selector: SHARP_SUBMISSION_SELECTOR,
              programHashes: config.query.programHashes,
            },
          } as const
          return {
            ...withParams,
            id: createTrackedTxId(withParams),
          }
        }
      }
    }),
  )
}

export function layer3ToBackendProject(layer3: Layer3): BackendProject {
  return {
    projectId: layer3.id,
    slug: layer3.display.slug,
    type: 'layer3',
    isUpcoming: layer3.isUpcoming,
    escrows: layer3.config.escrows.map(toProjectEscrow),
    associatedTokens: layer3.config.associatedTokens,
  }
}

function toProjectEscrow(escrow: ScalingProjectEscrow): BackendProjectEscrow {
  const chainId = chainConverter.toChainId(escrow.chain)

  const tokensOnChain = tokenList.filter((t) => t.chainId === chainId)

  return {
    address: escrow.address,
    sinceTimestamp: escrow.sinceTimestamp,
    tokens:
      escrow.tokens === '*'
        ? tokensOnChain.filter(
            (t) => !escrow.excludedTokens?.includes(t.symbol),
          )
        : mapTokens(escrow, tokensOnChain),
    chain: escrow.chain,
    includeInTotal: escrow.includeInTotal,
    source: escrow.source,
    bridge: escrow.bridge,
  }
}

function mapTokens(
  escrow: ScalingProjectEscrow,
  tokensOnChain: Token[],
): Token[] {
  assert(escrow.tokens !== '*')
  return escrow.tokens.map((tokenSymbol) => {
    const token = tokensOnChain.find((t) => t.symbol === tokenSymbol)
    assert(
      token,
      `Token with symbol ${tokenSymbol} not found on ${
        escrow.chain
      } @ ${escrow.address.toString()}`,
    )
    return token
  })
}
