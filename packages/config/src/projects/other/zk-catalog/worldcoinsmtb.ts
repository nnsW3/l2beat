import { ChainId, EthereumAddress } from '@l2beat/shared-pure'
import { PERFORMED_BY } from './common'
import { ZkCatalogProject } from './types/ZkCatalogProject'

export const worldcoinsmtb: ZkCatalogProject = {
  display: {
    slug: 'worldcoin-smtb',
    name: 'Worldcoin SMTB',
  },
  proofVerification: {
    aggregation: false,
    verifiers: [
      {
        name: 'Size 100 Register',
        description: 'SMTB Register verifier of size 100.',
        contractAddress: EthereumAddress(
          '0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'yes',
        performedBy: PERFORMED_BY.l2beat,
        subVerifiers: [
          {
            name: 'RegisterCircuitSize100',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 23 + circuit specific',
            mainPCS: 'N/A',
            link: 'https://github.com/worldcoin/semaphore-mtb/blob/113f8a8a4d2aecf42b9173fd0a52bef5120fcaec/prover/insertion_circuit.go',
          },
        ],
      },
      {
        name: 'Size 600 Register',
        description: 'SMTB Register verifier of size 600.',
        contractAddress: EthereumAddress(
          '0xFC1c26E964F791f81a33F49D91f79456891AA1c1',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'RegisterCircuitSize600',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 26 + circuit specific',
            mainPCS: 'N/A',
            link: 'https://github.com/worldcoin/semaphore-mtb/blob/113f8a8a4d2aecf42b9173fd0a52bef5120fcaec/prover/insertion_circuit.go',
          },
        ],
      },
      {
        name: 'Size 1200 Register',
        description: 'SMTB Register verifier of size 1200.',
        contractAddress: EthereumAddress(
          '0xE44c83b9e1971A24EC698829297A0C4026B0CeF9',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'RegisterCircuitSize1200',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 27 + circuit specific',
            mainPCS: 'N/A',
            link: 'https://github.com/worldcoin/semaphore-mtb/blob/113f8a8a4d2aecf42b9173fd0a52bef5120fcaec/prover/insertion_circuit.go',
          },
        ],
      },
      {
        name: 'Size 10 Delete',
        description: 'SMTB Delete verifier of size 10.',
        contractAddress: EthereumAddress(
          '0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'yes',
        performedBy: PERFORMED_BY.l2beat,
        subVerifiers: [
          {
            name: 'DeleteCircuitSize10',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 19 + circuit specific',
            mainPCS: 'N/A',
            link: 'https://github.com/worldcoin/semaphore-mtb/blob/113f8a8a4d2aecf42b9173fd0a52bef5120fcaec/prover/deletion_circuit.go',
          },
        ],
      },
      {
        name: 'Size 100 Delete',
        description: 'SMTB Delete verifier of size 100.',
        contractAddress: EthereumAddress(
          '0x43B68ccBa7FC726540768fD1537c3179283140ed',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'yes',
        performedBy: PERFORMED_BY.l2beat,
        subVerifiers: [
          {
            name: 'DeleteCircuitSize100',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 22 + circuit specific',
            mainPCS: 'N/A',
            link: 'https://github.com/worldcoin/semaphore-mtb/blob/113f8a8a4d2aecf42b9173fd0a52bef5120fcaec/prover/deletion_circuit.go',
          },
        ],
      },
    ],
    requiredTools: [
      {
        name: 'Semaphore MTB',
        version: '113f8a8a4d2aecf42b9173fd0a52bef5120fcaec',
        link: 'https://github.com/worldcoin/semaphore-mtb',
      },
      {
        name: 'Semaphore MTB Setup',
        version: 'd46ef6be3eb0c43303d7e817f7d0c005530addf0',
        link: 'https://github.com/worldcoin/semaphore-mtb-setup',
      },
      {
        name: 'PTAU deserializer',
        version: '922115452ffdb4b92972e3b81277e5931fb90efa',
        link: 'https://github.com/worldcoin/ptau-deserializer',
      },
      {
        name: 'GNARK contract generator',
        version: '1eb487a151323cbc41ac4a6b7b24f71268d61be2',
        link: 'https://github.com/worldcoin/gnark-contract-generator',
      },
    ],
  },
  type: 'zk-catalog',
}
