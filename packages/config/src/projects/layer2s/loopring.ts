import {
  ChainId,
  EthereumAddress,
  ProjectId,
  UnixTime,
} from '@l2beat/shared-pure'

import {
  CONTRACTS,
  EXITS,
  FORCE_TRANSACTIONS,
  NEW_CRYPTOGRAPHY,
  OPERATOR,
  RISK_VIEW,
  STATE_CORRECTNESS,
  TECHNOLOGY_DATA_AVAILABILITY,
  addSentimentToDataAvailability,
  makeBridgeCompatible,
} from '../../common'
import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import { Badge } from '../badges'
import { getStage } from './common/stages/getStage'
import { Layer2 } from './types'

const discovery = new ProjectDiscovery('loopring')
const forcedWithdrawalDelay = discovery.getContractValue<{
  [key: string]: number
}>('ExchangeV3', 'getConstants').MAX_AGE_FORCED_REQUEST_UNTIL_WITHDRAW_MODE
const maxAgeDepositUntilWithdrawable = discovery.getContractValue<number>(
  'ExchangeV3',
  'getMaxAgeDepositUntilWithdrawable',
)
const forcedWithdrawalFee = discovery.getContractValue<number>(
  'LoopringV3',
  'forcedWithdrawalFee',
)

const upgrades = {
  upgradableBy: ['ProxyOwner'],
  upgradeDelay: 'No delay',
}

const upgradeDelay = 0

export const loopring: Layer2 = {
  type: 'layer2',
  id: ProjectId('loopring'),
  badges: [Badge.VM.AppChain, Badge.DA.EthereumCalldata],
  display: {
    name: 'Loopring',
    slug: 'loopring',
    description:
      'Loopring is a ZK Rollup exchange protocol for trading and payments.',
    purposes: ['NFT', 'AMM'],
    provider: 'Loopring',
    category: 'ZK Rollup',
    links: {
      websites: ['https://loopring.org'],
      apps: ['https://loopring.io/#/trade'],
      documentation: [
        'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md',
        'https://docs.loopring.io/',
      ],
      explorers: ['https://explorer.loopring.io/'],
      repositories: ['https://github.com/Loopring/protocols'],
      socialMedia: [
        'https://loopring.org/#/blog',
        'https://medium.com/loopring-protocol',
        'https://twitter.com/loopringorg',
        'https://discord.gg/loopring',
        'https://youtube.com/c/loopring',
        'https://weibo.com/loopringfoundation',
        'https://reddit.com/r/loopringorg/',
        'https://loopring.substack.com/',
      ],
    },
    activityDataSource: 'Explorer API',
    liveness: {
      explanation:
        'Loopring is a ZK rollup that posts state diffs to the L1. For a transaction to be considered final, the state diffs have to be submitted and validity proof should be generated, submitted, and verified. ',
    },
    finality: {
      finalizationPeriod: 0,
    },
  },
  config: {
    associatedTokens: ['LRC'],
    escrows: [
      // WeDEX: Beta 1
      {
        address: EthereumAddress('0x7D3D221A8D8AbDd868E8e88811fFaF033e68E108'),
        sinceTimestamp: new UnixTime(1575539271),
        tokens: ['LRC', 'USDT'],
        isHistorical: true,
        chain: 'ethereum',
      },
      // WeDEX: Beta 2
      {
        address: EthereumAddress('0xD97D09f3bd931a14382ac60f156C1285a56Bb51B'),
        sinceTimestamp: new UnixTime(1578284114),
        tokens: ['LRC', 'USDT'],
        isHistorical: true,
        chain: 'ethereum',
      },
      {
        address: EthereumAddress('0x674bdf20A0F284D710BC40872100128e2d66Bd3f'),
        sinceTimestamp: new UnixTime(1603949642),
        tokens: '*',
        chain: 'ethereum',
      },
    ],
    transactionApi: {
      type: 'loopring',
      defaultUrl: 'https://api3.loopring.io/api/v3',
      defaultCallsPerMinute: 240,
    },
    trackedTxs: [
      {
        uses: [
          {
            type: 'liveness',
            subtype: 'stateUpdates',
          },
          {
            type: 'l2costs',
            subtype: 'stateUpdates',
          },
        ],
        query: {
          formula: 'functionCall',
          address: EthereumAddress(
            '0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512',
          ),
          selector: '0xdcb2aa31',
          functionSignature:
            'function submitBlocksWithCallbacks(bool isDataCompressed, bytes calldata data, ((uint16,(uint16,uint16,uint16,bytes)[])[], address[])  calldata config)',
          sinceTimestamp: new UnixTime(1616396742),
        },
      },
    ],
    liveness: {
      duplicateData: {
        from: 'stateUpdates',
        to: 'proofSubmissions',
      },
    },
    finality: {
      lag: 0,
      type: 'Loopring',
      minTimestamp: new UnixTime(1616396742),
      stateUpdate: 'disabled',
    },
  },
  dataAvailability: addSentimentToDataAvailability({
    layers: ['Ethereum (calldata)'],
    bridge: { type: 'Enshrined' },
    mode: 'State diffs',
  }),
  riskView: makeBridgeCompatible({
    stateValidation: RISK_VIEW.STATE_ZKP_SN,
    dataAvailability: RISK_VIEW.DATA_ON_CHAIN,
    exitWindow: RISK_VIEW.EXIT_WINDOW(upgradeDelay, forcedWithdrawalDelay),
    sequencerFailure: {
      ...RISK_VIEW.SEQUENCER_FORCE_VIA_L1_LOOPRING(
        forcedWithdrawalDelay,
        forcedWithdrawalFee,
        maxAgeDepositUntilWithdrawable,
      ),
      sources: [
        {
          contract: 'ExchangeV3',
          references: [
            'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L7252',
            'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L6195',
            'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L6090',
          ],
        },
        {
          contract: 'LoopringV3',
          references: [
            'https://etherscan.io/address/0xe56D6ccab6551932C0356E4e8d5dAF0630920C71#code#L1825',
          ],
        },
      ],
    },
    proposerFailure: {
      ...RISK_VIEW.PROPOSER_USE_ESCAPE_HATCH_MP,
      sources: [
        {
          contract: 'ExchangeV3',
          references: [
            'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L8159',
          ],
        },
      ],
    },
    destinationToken: RISK_VIEW.NATIVE_AND_CANONICAL('LRC'),
    validatedBy: RISK_VIEW.VALIDATED_BY_ETHEREUM,
  }),
  stage: getStage({
    stage0: {
      callsItselfRollup: true,
      stateRootsPostedToL1: true,
      dataAvailabilityOnL1: true,
      rollupNodeSourceAvailable: false,
    },
    stage1: {
      stateVerificationOnL1: true,
      fraudProofSystemAtLeast5Outsiders: null,
      usersHave7DaysToExit: false,
      usersCanExitWithoutCooperation: true,
      securityCouncilProperlySetUp: null,
    },
    stage2: {
      proofSystemOverriddenOnlyInCaseOfABug: null,
      fraudProofSystemIsPermissionless: null,
      delayWith30DExitWindow: false,
    },
  }),
  technology: {
    stateCorrectness: {
      ...STATE_CORRECTNESS.VALIDITY_PROOFS,
      references: [
        {
          text: 'Operators - Loopring design doc',
          href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#operators',
        },
      ],
    },
    newCryptography: {
      ...NEW_CRYPTOGRAPHY.ZK_SNARKS,
      references: [
        {
          text: 'Operators - Loopring design doc',
          href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#operators',
        },
      ],
    },
    dataAvailability: {
      ...TECHNOLOGY_DATA_AVAILABILITY.ON_CHAIN_CALLDATA,
      references: [
        {
          text: 'Introduction - Loopring design doc',
          href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#introduction',
        },
      ],
    },
    operator: {
      ...OPERATOR.CENTRALIZED_OPERATOR,
      references: [
        {
          text: 'ExchangeV3.sol#L315-L322 - Etherscan source code, submitBlocks function',
          href: 'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L8022',
        },
        {
          text: 'LoopringIOExchangeOwner.sol#L123-L126 - Etherscan source code, hasAccessTo function call',
          href: 'https://etherscan.io/address/0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512#code#L5539',
        },
      ],
    },
    forceTransactions: {
      ...FORCE_TRANSACTIONS.WITHDRAW_OR_HALT(),
      references: [
        {
          text: 'Forced Withdrawals - Loopring design doc',
          href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#forced-withdrawals',
        },
        {
          text: 'Forced Request Handling - Loopring design doc',
          href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#forced-request-handling',
        },
      ],
    },
    exitMechanisms: [
      {
        ...EXITS.REGULAR('zk', 'no proof'),
        references: [
          {
            text: 'Withdraw - Loopring design doc',
            href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#withdraw',
          },
        ],
      },
      {
        ...EXITS.FORCED(),
        references: [
          {
            text: 'Forced Request Handling - Loopring design doc',
            href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#forced-request-handling',
          },
          {
            text: 'ExchangeV3.sol#L8118 - Loopring source code, forceWithdraw function',
            href: 'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L8118',
          },
        ],
      },
      {
        ...EXITS.EMERGENCY(
          'Withdrawal Mode',
          'merkle proof',
          forcedWithdrawalDelay,
        ),
        references: [
          {
            text: 'Forced Request Handling - Loopring design doc',
            href: 'https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md#forced-request-handling',
          },
          {
            text: 'ExchangeV3.sol#L8159 - Loopring source code, withdrawFromMerkleTree function',
            href: 'https://etherscan.io/address/0x26d8Ba776a067C5928841985bCe342f75BAE7E82#code#L8159',
          },
        ],
      },
    ],
  },
  permissions: [
    ...discovery.getMultisigPermission(
      'ProxyOwner',
      'This address is the owner of the following contracts: LoopringIOExchangeOwner, ExchangeV3 (proxy), BlockVerifier, AgentRegistry, LoopringV3. This allows it to grant access to submitting blocks, arbitrarily change the forced withdrawal fee, change the Verifier address and upgrade ExchangeV3 implementation potentially gaining access to all funds in DefaultDepositContract.',
    ),
    {
      name: 'Block Submitters',
      accounts: discovery.getPermissionedAccounts(
        'LoopringIOExchangeOwner',
        'blockSubmitters',
      ),
      description:
        'Actors who can submit new blocks, updating the L2 state on L1.',
    },
    {
      name: 'RollupOwner',
      accounts: [discovery.getPermissionedAccount('ExchangeV3', 'owner')],
      description:
        'The rollup owner can submit blocks, set rollup parameters and shutdown the exchange.',
    },
  ],
  contracts: {
    addresses: [
      discovery.getContractDetails('ExchangeV3', {
        description: 'Main Loopring contract.',
        ...upgrades,
      }),
      discovery.getContractDetails(
        'LoopringIOExchangeOwner',
        'Contract used by the Prover to submit exchange blocks with zkSNARK proofs that are later processed and verified by the BlockVerifier contract. It allows to give or revoke permissions to submit blocks and to open block submission to everyone.',
      ),
      discovery.getContractDetails(
        'DefaultDepositContract',
        'ERC 20 token basic deposit contract. Handles user deposits and withdrawals.',
      ),
      discovery.getContractDetails(
        'LoopringV3',
        'Contract managing LRC staking for exchanges (one Loopring contract can manage many exchanges). It also allows to change the forced withdrawal fee and the Verifier address.',
      ),
      discovery.getContractDetails(
        'FastWithdrawalAgent',
        'Auxiliary contract allowing users to process fast withdrawals.',
      ),
      discovery.getContractDetails(
        'ForcedWithdrawalAgent',
        'Auxiliary contract able to force withdrawals from L1 on behalf of users.',
      ),
      discovery.getContractDetails('BlockVerifier', {
        description: 'zkSNARK Verifier based on ethsnarks library.',
        ...upgrades,
        upgradeConsiderations:
          'The Verifier contract address can be changed by the ProxyOwner.',
      }),
      discovery.getContractDetails(
        'AgentRegistry',
        'Agent registry that is used by all other Loopring contracts. Currently used are FastWithdrawalAgent, ForcedWithdrawalAgent, DestroyableWalletAgent and a number of LoopringAmmPool contracts.',
      ),
    ],
    risks: [CONTRACTS.UPGRADE_NO_DELAY_RISK],
  },
  stateValidation: {
    description:
      'Each update to the system state must be accompanied by a ZK proof that ensures that the new state was derived by correctly applying a series of valid user transactions to the previous state. These proofs are then verified on Ethereum by a smart contract.',
    categories: [
      {
        title: 'ZK Circuits',
        description:
          'Loopring utilizes Groth16 for their proving system. The source code of the circuits can be found [here](https://github.com/Loopring/protocol3-circuits).',
        risks: [
          {
            category: 'Funds can be lost if',
            text: 'the proof system is implemented incorrectly.',
          },
        ],
      },
      {
        title: 'Verification Keys Generation',
        description:
          'Groth16 requires a circuit specific trusted setup, so they run their own ceremony. The first phase is run using Powers of Tau ceremony. Some of the instructions on how to regenerate the verification keys can be found [here](https://github.com/Loopring/trusted_setup/tree/loopring-3.6.2).',
      },
    ],
    proofVerification: {
      aggregation: false,
      requiredTools: [
        {
          name: 'Custom tool',
          version: 'v3.6.2',
          link: 'https://github.com/Loopring/trusted_setup/tree/loopring-3.6.2',
        },
      ],
      verifiers: [
        {
          name: 'LoopringVerifier',
          description: 'Loopring utilizes Groth16 for their proving system.',
          verified: 'no',
          contractAddress: EthereumAddress(
            '0x6150343E0F43A17519c0327c41eDd9eBE88D01ef',
          ),
          chainId: ChainId.ETHEREUM,
          subVerifiers: [
            {
              name: 'Main circuit',
              proofSystem: 'Groth16',
              mainArithmetization: 'R1CS+QAP',
              mainPCS: 'N/A',
              trustedSetup: 'Powers of Tau 18',
              link: 'https://github.com/Loopring/protocol3-circuits.git',
            },
          ],
        },
      ],
    },
  },
  milestones: [
    {
      name: 'Loopring ZK Rollup is live',
      link: 'https://medium.com/loopring-protocol/loopring-deployed-protocol-3-0-on-ethereum-a33103c9e5bf',
      date: '2019-12-04T00:00:00Z',
      description:
        'Loopring Protocol 3.0 is fully operational with support for orderbook trading on WeDex.',
    },
    {
      name: 'Loopring Protocol 3.6 Pre-release',
      link: 'https://medium.loopring.io/loopring-3-6-is-code-complete-and-security-audit-has-begun-68a642506e31',
      date: '2020-09-22T00:00:00Z',
      description:
        'Enhancements in transfers, order-book trading and AMM swap.',
    },
    {
      name: 'Loopring’s ZK Rollup AMM is Live',
      link: 'https://medium.loopring.io/looprings-zkrollup-amm-is-live-2f8251cd0fcd',
      date: '2020-12-02T00:00:00Z',
      description:
        'Improved implementation, enabling gas-free instant swaps and liquidity changes.',
    },
    {
      name: 'Loopring Supports Payments',
      link: 'https://medium.loopring.io/loopring-pay-is-live-zkrollup-transfers-on-ethereum-770d35213408',
      date: '2020-06-06T00:00:00Z',
      description: 'Support for ERC20 transfers is live on Loopring.',
    },
    {
      name: 'DeFi Port is Live on Loopring',
      link: 'https://medium.loopring.io/loopring-l2-defi-port-cd6e811250a9',
      date: '2022-09-27T00:00:00Z',
      description:
        'Dutch auctions, lending, and other DeFi functions can be performed on Loopring.',
    },
    {
      name: 'Loopring Supports NFTs',
      link: 'https://medium.loopring.io/loopring-now-supports-nfts-on-l2-29174a343d0d',
      date: '2021-08-24T00:00:00Z',
      description: 'Loopring supports NFT minting, trading, and transfers.',
    },
    {
      name: 'Loopring DEX is online',
      link: 'https://medium.loopring.io/loopring-launches-zkrollup-exchange-loopring-io-d6a85beeed21',
      date: '2020-02-27T00:00:00Z',
      description:
        'ZK Rollup trading is live, as Loopring launches their order book based exchange.',
    },
  ],
}
