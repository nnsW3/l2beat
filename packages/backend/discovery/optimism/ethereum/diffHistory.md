Generated with discovered.json: 0xc5d8b67d84299d6ebcefe389a9fb5eca20ef57d9

# Diff at Tue, 30 Jul 2024 11:13:18 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20290315
- current block number: 20290315

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20290315 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

```diff
    contract OptimismPortal (0xbEb5Fc579115071764c7423A4f12eDde41f106Ed) {
    +++ description: None
      fieldMeta:
+        {"paused":{"severity":"HIGH","description":"Whether the contract is paused or not. Determined by the SuperchainConfig contract PAUSED_SLOT. Here it pauses withdrawals. If this is paused, also the L1CrossDomainMessenger and ERC-20, ERC-721 deposits are paused."}}
    }
```

Generated with discovered.json: 0x55a5a82cf4f21a3767afa54a4a7696989b963840

# Diff at Thu, 18 Jul 2024 10:32:23 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 20290315
- current block number: 20290315

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20290315 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: None
      template:
+        "gnosisSafeModules/LivenessModule"
      descriptions:
+        ["used to remove members inactive for 8467200 while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig"]
    }
```

```diff
    contract GuardianMultisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      roles:
+        ["Guardian"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1) {
    +++ description: None
      template:
+        "opstack/L1CrossDomainMessenger"
      descriptions:
+        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      categories:
+        ["Core"]
    }
```

```diff
    contract ProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      name:
-        "ProxyAdmin"
+        "SuperchainProxyAdmin"
      descriptions:
+        ["It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component."]
    }
```

```diff
    contract ProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      name:
-        "ProxyAdminOwner"
+        "SuperchainProxyAdminOwner"
      descriptions:
+        ["It can act on behalf of 0x543bA4AADBAb8f9025686Bd03993043599c6fB04, inheriting its permissions."]
    }
```

```diff
    contract L1ERC721Bridge (0x5a7749f83b81B301cAb5f48EB8516B986DAef23D) {
    +++ description: None
      template:
+        "opstack/L1ERC721Bridge"
      descriptions:
+        ["Used to bridge ERC-721 tokens from host chain to this chain."]
    }
```

```diff
    contract DeputyGuardianModule (0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8) {
    +++ description: None
      template:
+        "gnosisSafeModules/DeputyGuardianModule"
      descriptions:
+        ["allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A (the deputy guardian) to act on behalf of the Gnosis Safe."]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x75505a97BD334E7BD3C476893285569C4136Fa0F) {
    +++ description: None
      template:
+        "opstack/OptimismMintableERC20Factory"
      descriptions:
+        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: None
      template:
+        "opstack/SuperchainConfig"
      descriptions:
+        ["Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."]
      categories:
+        ["Upgrades&Governance"]
    }
```

```diff
    contract L1StandardBridge (0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1) {
    +++ description: None
      template:
+        "opstack/L1StandardBridge"
      descriptions:
+        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      categories:
+        ["Gateways&Escrows"]
    }
```

```diff
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      descriptions:
+        ["Deputy Guardian of 0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8. It can act on behalf of the 0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2."]
    }
```

Generated with discovered.json: 0x6c82d42b433ed39ceb66098f6f19c519b6885edb

# Diff at Fri, 12 Jul 2024 12:08:02 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@d6f7bd1c3a10712b93b6891cc6ca39616765a983 block: 20188703
- current block number: 20290315

## Description

These changes are due to the [OP Mainnet 'Fjord' upgrade](https://gov.optimism.io/t/upgrade-proposal-9-fjord-network-upgrade/8236) which, on the L1, affects the fault proof related contracts in order to introduce the new op-program pre-state hash (otherwise code-identical).

### Fjord upgrade TLDR

- secp256r1 precompile
- brotli channel compression
- FastLZ based DA fee calculation
- max sequencer drift (time delta between L2 block ts and according epoch ts derived from L1) raised from 10 to 30 minutes

## Watched changes

```diff
-   Status: DELETED
    contract FaultDisputeGame (0x4146DF64D83acB0DcB0c1a4884a16f090165e122)
    +++ description: None
```

```diff
    contract DisputeGameFactory (0xe5965Ab5962eDc7477C8520243A95517CD252fA9) {
    +++ description: None
      values.gameImpls.1:
-        "0xE9daD167EF4DE8812C1abD013Ac9570C616599A0"
+        "0xc307e93a7C530a184c98EaDe4545a412b857b62f"
      values.gameImpls.0:
-        "0x4146DF64D83acB0DcB0c1a4884a16f090165e122"
+        "0xf691F8A6d908B58C534B624cF16495b491E633BA"
    }
```

```diff
-   Status: DELETED
    contract PermissionedDisputeGame (0xE9daD167EF4DE8812C1abD013Ac9570C616599A0)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0xc307e93a7C530a184c98EaDe4545a412b857b62f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FaultDisputeGame (0xf691F8A6d908B58C534B624cF16495b491E633BA)
    +++ description: None
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20188703 (main branch discovery), not current.

```diff
    contract FaultDisputeGame (0x4146DF64D83acB0DcB0c1a4884a16f090165e122) {
    +++ description: None
      values.getNumToResolve:
+        [0,0,0,0,0]
      values.resolutionCheckpoints:
+        [[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"]]
      values.resolvedSubgames:
+        [false,false,false,false,false]
      errors:
+        {"getNumToResolve":"Too many values. Update configuration to explore fully","resolutionCheckpoints":"Too many values. Update configuration to explore fully","resolvedSubgames":"Too many values. Update configuration to explore fully"}
    }
```

```diff
    contract PermissionedDisputeGame (0xE9daD167EF4DE8812C1abD013Ac9570C616599A0) {
    +++ description: None
      values.getNumToResolve:
+        [0,0,0,0,0]
      values.resolutionCheckpoints:
+        [[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"],[false,0,0,"0x0000000000000000000000000000000000000000"]]
      values.resolvedSubgames:
+        [false,false,false,false,false]
      errors:
+        {"getNumToResolve":"Too many values. Update configuration to explore fully","resolutionCheckpoints":"Too many values. Update configuration to explore fully","resolvedSubgames":"Too many values. Update configuration to explore fully"}
    }
```

Generated with discovered.json: 0x30dae19859608d0e7e7778237f60c0357f680e61

# Diff at Fri, 28 Jun 2024 07:31:54 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@555efdd96fadc389c2c70beacf820125fbb25a7d block: 20175040
- current block number: 20188703

## Description

Changed SystemConfig owner from FoundationMultisig_2 (5/7) to FoundationMultisig_1 (5/7).

## Watched changes

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      values.owner:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
    }
```

Generated with discovered.json: 0x19ad81c5f5a060678a0f05245c18f2d580870d4a

# Diff at Tue, 11 Jun 2024 15:10:44 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b9a39f700e84af1cffa010ce0e20e64b23a4c64 block: 20067517
- current block number: 20069391

## Description

Config related, ignore spam.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20067517 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      values.resourceConfig:
-        [20000000,10,8,1000000000,1000000,"340282366920938463463374607431768211455"]
+        {"maxResourceLimit":20000000,"elasticityMultiplier":10,"baseFeeMaxChangeDenominator":8,"minimumBaseFee":1000000000,"systemTxMaxGas":1000000,"maximumBaseFee":"340282366920938463463374607431768211455"}
    }
```

```diff
    contract FaultDisputeGame (0x4146DF64D83acB0DcB0c1a4884a16f090165e122) {
    +++ description: None
      values.gameData:
-        [0,"0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000"]
+        {"gameType_":0,"rootClaim_":"0x0000000000000000000000000000000000000000000000000000000000000000","extraData_":"0x0000000000000000000000000000000000000000000000000000000000000000"}
      values.startingOutputRoot:
-        ["0x0000000000000000000000000000000000000000000000000000000000000000",0]
+        {"root":"0x0000000000000000000000000000000000000000000000000000000000000000","l2BlockNumber":0}
    }
```

```diff
    contract PermissionedDisputeGame (0xE9daD167EF4DE8812C1abD013Ac9570C616599A0) {
    +++ description: None
      values.gameData:
-        [1,"0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000"]
+        {"gameType_":1,"rootClaim_":"0x0000000000000000000000000000000000000000000000000000000000000000","extraData_":"0x0000000000000000000000000000000000000000000000000000000000000000"}
      values.startingOutputRoot:
-        ["0x0000000000000000000000000000000000000000000000000000000000000000",0]
+        {"root":"0x0000000000000000000000000000000000000000000000000000000000000000","l2BlockNumber":0}
    }
```

Generated with discovered.json: 0x5794d6cdac900458e007cfc157f752ad75a4602b

# Diff at Tue, 11 Jun 2024 08:53:37 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@6a747b8f93a46c87e2494c6adb06df4640d08444 block: 20025146
- current block number: 20067517

## Description

Introduction of permissionless fraud proofs and permissions update to be Stage 1.

## Watched changes

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      upgradeability.implementation:
-        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
+        "0xF56D96B2535B932656d3c04Ebf51baBff241D886"
      implementations.0:
-        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
+        "0xF56D96B2535B932656d3c04Ebf51baBff241D886"
      values.L2_OUTPUT_ORACLE_SLOT:
-        "0xe52a667f71ec761b9b381c7b76ca9b852adf7e8905da0e0ad49986a0a6871815"
      values.l2OutputOracle:
-        "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      values.version:
-        "1.12.0"
+        "2.2.0"
      values.DISPUTE_GAME_FACTORY_SLOT:
+        "0x52322a25d9f59ea17656545543306b7aef62bc0cc53a0e65ccfa0c75b97aa906"
      values.disputeGameFactory:
+        "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
      values.maximumGasLimit:
+        200000000
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: None
      values.guardian:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
    }
```

```diff
    contract OptimismPortal (0xbEb5Fc579115071764c7423A4f12eDde41f106Ed) {
    +++ description: None
      upgradeability.implementation:
-        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
+        "0xe2F826324b2faf99E513D16D266c3F80aE87832B"
      implementations.0:
-        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
+        "0xe2F826324b2faf99E513D16D266c3F80aE87832B"
      values.guardian:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.GUARDIAN:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.L2_ORACLE:
-        "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      values.l2Oracle:
-        "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      values.SYSTEM_CONFIG:
-        "0x229047fed2591dbec1eF1118d64F7aF3dB9EB290"
      values.version:
-        "2.5.0"
+        "3.10.0"
      values.disputeGameFactory:
+        "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
      values.disputeGameFinalityDelaySeconds:
+        302400
      values.proofMaturityDelaySeconds:
+        604800
      values.respectedGameType:
+        0
      values.respectedGameTypeUpdatedAt:
+        1718037779
      derivedName:
-        "OptimismPortal"
+        "OptimismPortal2"
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      upgradeability.modules.0:
+        "0x0454092516c9A4d636d3CAfA1e82161376C8a748"
      upgradeability.threshold:
-        "4 of 13 (31%)"
+        "10 of 13 (77%)"
      values.getThreshold:
-        4
+        10
    }
```

```diff
-   Status: DELETED
    contract L2OutputOracle (0xdfe97868233d1aa22e815a266982f2cf17685a27)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GuardianMultisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MIPS (0x0f8EdFbDdD3c0256A80AD8C0F2560B1807873C9c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AnchorStateRegistry (0x18DAc71c228D1C32c99489B7323d441E1175e443)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FaultDisputeGame (0x4146DF64D83acB0DcB0c1a4884a16f090165e122)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeputyGuardianModule (0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PreimageOracle (0xD326E10B8186e90F4E2adc5c13a2d0C137ee8b34)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelayedWETH (0xE497B094d6DbB3D5E4CaAc9a14696D7572588d14)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DisputeGameFactory (0xe5965Ab5962eDc7477C8520243A95517CD252fA9)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0xE9daD167EF4DE8812C1abD013Ac9570C616599A0)
    +++ description: None
```

## Source code changes

```diff
.../AnchorStateRegistry/AnchorStateRegistry.sol    |  414 +++
 .../ethereum/.flat/AnchorStateRegistry/Proxy.p.sol |  199 +
 .../ethereum/.flat/DelayedWETH/DelayedWETH.sol     |  649 ++++
 .../ethereum/.flat/DelayedWETH/Proxy.p.sol         |  199 +
 .../ethereum/.flat/DeputyGuardianModule.sol        |  139 +
 .../DisputeGameFactory/DisputeGameFactory.sol      | 1549 ++++++++
 .../ethereum/.flat/DisputeGameFactory/Proxy.p.sol  |  199 +
 .../optimism/ethereum/.flat/FaultDisputeGame.sol   | 3700 +++++++++++++++++++
 .../ethereum/.flat/GuardianMultisig/GnosisSafe.sol |  952 +++++
 .../.flat/GuardianMultisig/GnosisSafeProxy.p.sol   |   34 +
 .../L2OutputOracle/L2OutputOracle.sol => /dev/null |  678 ----
 .../L2OutputOracle/Proxy.p.sol => /dev/null        |  210 --
 .../optimism/ethereum/.flat/LivenessGuard.sol      |  581 +++
 .../optimism/ethereum/.flat/LivenessModule.sol     |  257 ++
 .../optimism/ethereum/.flat/MIPS.sol               | 1103 ++++++
 .../OptimismPortal/OptimismPortal2.sol}            |  512 ++-
 .../ethereum/.flat/PermissionedDisputeGame.sol     | 3815 ++++++++++++++++++++
 .../optimism/ethereum/.flat/PreimageOracle.sol     | 1309 +++++++
 .../SystemConfig/SystemConfig.sol                  |   48 +-
 19 files changed, 15451 insertions(+), 1096 deletions(-)
```

Generated with discovered.json: 0x2e96b99a18a238b80113eef0b15038b22f19a9eb

# Diff at Wed, 05 Jun 2024 10:52:13 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@2d4052223220f6bca7a10a92f78dc445f890f114 block: 19875796
- current block number: 20025146

## Description

Provide description of changes. This section will be preserved.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19875796 (main branch discovery), not current.

```diff
+   Status: CREATED
    contract FeesCollector (0xa3d596EAfaB6B13Ab18D40FaE1A962700C84ADEa)
    +++ description: None
```

Generated with discovered.json: 0x2f397bd826fe7f9bf02d8d05820501cea74e396d

# Diff at Wed, 15 May 2024 13:52:02 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@2a68252776877f0b82e9f7cf6261b744952be771 block: 19639423
- current block number: 19875796

## Description

One signer of the SynthetixMultisig (governing the SNX escrow) has been replaced: `0xEde8a407913A874Dd7e3d5B731AFcA135D30375E` replaced by `0xe2163dd599067919d1e9108929b568Bf41D3A420`.

## Watched changes

```diff
    contract SynthetixMultisig (0xEb3107117FEAd7de89Cd14D463D340A2E6917769) {
    +++ description: None
      values.getOwners.10:
-        "0xEde8a407913A874Dd7e3d5B731AFcA135D30375E"
+        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
      values.getOwners.9:
-        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
+        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
      values.getOwners.8:
-        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
+        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
      values.getOwners.7:
-        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
+        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
      values.getOwners.6:
-        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
+        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
      values.getOwners.5:
-        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
+        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
      values.getOwners.4:
-        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
+        "0xe1Efa5C91cA533E4a51884d805879249E3FCB2BC"
      values.getOwners.3:
-        "0xe1Efa5C91cA533E4a51884d805879249E3FCB2BC"
+        "0x8909F73188C4fE68B283fCB1E724b2466e0BdfD0"
      values.getOwners.2:
-        "0x8909F73188C4fE68B283fCB1E724b2466e0BdfD0"
+        "0x0B67bab43157e53D21965Af0d83f83BeD9553E0a"
      values.getOwners.1:
-        "0x0B67bab43157e53D21965Af0d83f83BeD9553E0a"
+        "0x26E10fF641839cA457695CE955Cb90657D6E3F53"
      values.getOwners.0:
-        "0x26E10fF641839cA457695CE955Cb90657D6E3F53"
+        "0xe2163dd599067919d1e9108929b568Bf41D3A420"
    }
```

Generated with discovered.json: 0xd4cc5d9bc127f06ecb0a0d9f2bf520df2ffc72d5

# Diff at Fri, 12 Apr 2024 12:08:01 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@dfabb973c54d735b834c25775233fa7ed54bdc53 block: 19532035
- current block number: 19639423

## Description

Summary and rationale of the changes: <https://gov.optimism.io/t/upgrade-proposal-6-multi-chain-prep-mcp-l1/7677>

### SystemConfig

The SystemConfig now contains the addresses of all the contracts.

### OptimismPortal

The L2OutputOracle and the SystemConfig variables are no longer immutable. They're only modifiable via an upgrade, but now there is the advantage that different chains can share the same implementation: if they are immutable, the address is hardcoded into the bytecode instead, but now the only things that changes is the state of the proxy.

### L2OutputOracle

Immutable variables, including the challenger and the proposer are no longer immutable.

### L1StandardBridge

The messenger and other bridge on L2 are no longer immutable.

### L1CrossDomainMessenger

The OptimismPortal variable is no longer immutable.

## Watched changes

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      upgradeability.implementation:
-        "0x33A032ec93Ec0C492Ec4BF0B30D5f51986E5a314"
+        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
      implementations.0:
-        "0x33A032ec93Ec0C492Ec4BF0B30D5f51986E5a314"
+        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
      values.version:
-        "1.11.0"
+        "1.12.0"
      values.BATCH_INBOX_SLOT:
+        "0x71ac12829d66ee73d8d95bff50b3589745ce57edae70a3fb111a2342464dc597"
      values.batchInbox:
+        "0xFF00000000000000000000000000000000000010"
      values.L1_CROSS_DOMAIN_MESSENGER_SLOT:
+        "0x383f291819e6d54073bc9a648251d97421076bdd101933c0c022219ce9580636"
      values.L1_ERC_721_BRIDGE_SLOT:
+        "0x46adcbebc6be8ce551740c29c47c8798210f23f7f4086c41752944352568d5a7"
      values.L1_STANDARD_BRIDGE_SLOT:
+        "0x9904ba90dde5696cda05c9e0dab5cbaa0fea005ace4d11218a02ac668dad6376"
      values.l1CrossDomainMessenger:
+        "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1"
      values.l1ERC721Bridge:
+        "0x5a7749f83b81B301cAb5f48EB8516B986DAef23D"
      values.l1StandardBridge:
+        "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      values.L2_OUTPUT_ORACLE_SLOT:
+        "0xe52a667f71ec761b9b381c7b76ca9b852adf7e8905da0e0ad49986a0a6871815"
      values.l2OutputOracle:
+        "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      values.OPTIMISM_MINTABLE_ERC20_FACTORY_SLOT:
+        "0xa04c5bb938ca6fc46d95553abf0a76345ce3e722a30bf4f74928b8e7d852320c"
      values.OPTIMISM_PORTAL_SLOT:
+        "0x4b6c74f9e688cb39801f2112c14a8c57232a3fc5202e1444126d4bce86eb19ac"
      values.optimismMintableERC20Factory:
+        "0x75505a97BD334E7BD3C476893285569C4136Fa0F"
      values.optimismPortal:
+        "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      values.START_BLOCK_SLOT:
+        "0xa11ee3ab75b40e88a0105e935d17cd36c8faee0138320d776c411291bdbbb19f"
      values.startBlock:
+        17422444
    }
```

```diff
    contract L1CrossDomainMessenger (0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1) {
    +++ description: None
      upgradeability.implementation:
-        "0xa95B24af19f8907390eD15f8348A1a5e6Ccbc5C6"
+        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      implementations.0:
-        "0xa95B24af19f8907390eD15f8348A1a5e6Ccbc5C6"
+        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      values.version:
-        "2.2.0"
+        "2.3.0"
      values.otherMessenger:
+        "0x4200000000000000000000000000000000000007"
    }
```

```diff
    contract ProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      values.nonce:
-        1
+        2
    }
```

```diff
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      values.nonce:
-        1
+        2
    }
```

```diff
    contract L1StandardBridge (0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1) {
    +++ description: None
      upgradeability.implementation:
-        "0x566511a1A09561e2896F8c0fD77E8544E59bFDB0"
+        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      implementations.0:
-        "0x566511a1A09561e2896F8c0fD77E8544E59bFDB0"
+        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      values.version:
-        "2.0.0"
+        "2.1.0"
    }
```

```diff
    contract OptimismPortal (0xbEb5Fc579115071764c7423A4f12eDde41f106Ed) {
    +++ description: None
      upgradeability.implementation:
-        "0xaBAbe63514dDd6277356F8cc3d6518aA8BDEB4de"
+        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
      implementations.0:
-        "0xaBAbe63514dDd6277356F8cc3d6518aA8BDEB4de"
+        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
      values.version:
-        "2.4.0"
+        "2.5.0"
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      values.nonce:
-        1
+        2
    }
```

```diff
    contract L2OutputOracle (0xdfe97868233d1aa22e815a266982f2cf17685a27) {
    +++ description: None
      upgradeability.implementation:
-        "0xDb5d932AF15D00F879CaBEbf008caDAAAa691e06"
+        "0xF243BEd163251380e78068d317ae10f26042B292"
      implementations.0:
-        "0xDb5d932AF15D00F879CaBEbf008caDAAAa691e06"
+        "0xF243BEd163251380e78068d317ae10f26042B292"
      values.version:
-        "1.7.0"
+        "1.8.0"
    }
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x5a7749f83b81B301cAb5f48EB8516B986DAef23D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x75505a97BD334E7BD3C476893285569C4136Fa0F)
    +++ description: None
```

## Source code changes

```diff
.../L1CrossDomainMessenger/implementation/meta.txt |   2 +-
 .../src/L1/L1CrossDomainMessenger.sol              |  50 ++-
 .../implementation/src/L1/L2OutputOracle.sol       | 151 ++++---
 .../implementation/src/L1/OptimismPortal.sol       | 100 +++--
 .../implementation/src/L1/SystemConfig.sol         | 166 +++++--
 .../src/universal/CrossDomainMessenger.sol         |  42 +-
 .../contracts/proxy/utils/Initializable.sol        | 138 ++++++
 .../contracts/token/ERC20/ERC20.sol                | 383 ++++++++++++++++
 .../contracts/token/ERC20/IERC20.sol               |  82 ++++
 .../token/ERC20/extensions/IERC20Metadata.sol      |  28 ++
 .../token/ERC20/extensions/draft-IERC20Permit.sol  |  60 +++
 .../contracts/token/ERC20/utils/SafeERC20.sol      | 116 +++++
 .../contracts/token/ERC721/IERC721.sol             | 143 ++++++
 .../token/ERC721/extensions/IERC721Enumerable.sol  |  29 ++
 .../contracts/utils/Address.sol                    | 222 ++++++++++
 .../contracts/utils/Context.sol                    |  24 +
 .../utils/introspection/ERC165Checker.sol          | 123 ++++++
 .../contracts/utils/introspection/IERC165.sol      |  25 ++
 .../contracts/utils/math/Math.sol                  | 226 ++++++++++
 .../contracts/utils/math/SignedMath.sol            |  43 ++
 .../contracts/proxy/utils/Initializable.sol        | 138 ++++++
 .../contracts/utils/AddressUpgradeable.sol         | 195 ++++++++
 .../lib/solmate/src/utils/FixedPointMathLib.sol    | 366 +++++++++++++++
 .../.code/L1ERC721Bridge/implementation/meta.txt   |   2 +
 .../implementation/src/L1/L1ERC721Bridge.sol       | 121 +++++
 .../implementation/src/L1/ResourceMetering.sol     | 162 +++++++
 .../implementation/src/L1/SuperchainConfig.sol     |  94 ++++
 .../implementation/src/L2/L2ERC721Bridge.sol       | 126 ++++++
 .../implementation/src/libraries/Arithmetic.sol    |  28 ++
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Encoding.sol      | 176 ++++++++
 .../implementation/src/libraries/Hashing.sol       | 124 ++++++
 .../implementation/src/libraries/Predeploys.sol    | 113 +++++
 .../implementation/src/libraries/SafeCall.sol      | 142 ++++++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/libraries/Types.sol         |  70 +++
 .../implementation/src/libraries/rlp/RLPWriter.sol | 163 +++++++
 .../src/universal/CrossDomainMessenger.sol         | 406 +++++++++++++++++
 .../implementation/src/universal/ERC721Bridge.sol  | 195 ++++++++
 .../src/universal/IOptimismMintableERC20.sol       |  31 ++
 .../src/universal/IOptimismMintableERC721.sol      |  48 ++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../src/universal/OptimismMintableERC20.sol        | 140 ++++++
 .../src/universal/StandardBridge.sol               | 489 +++++++++++++++++++++
 .../contracts/universal/Proxy.sol                  | 216 +++++++++
 .../ethereum/.code/L1ERC721Bridge/proxy/meta.txt   |   2 +
 .../L1StandardBridge/implementation/meta.txt       |   2 +-
 .../implementation/src/L1/L1StandardBridge.sol     |  22 +-
 .../src/universal/CrossDomainMessenger.sol         |  42 +-
 .../src/universal/StandardBridge.sol               |  82 ++--
 .../L2OutputOracle/implementation/meta.txt         |   2 +-
 .../implementation/src/L1/L2OutputOracle.sol       | 151 ++++---
 .../contracts/proxy/utils/Initializable.sol        | 138 ++++++
 .../contracts/token/ERC20/ERC20.sol                | 383 ++++++++++++++++
 .../contracts/token/ERC20/IERC20.sol               |  82 ++++
 .../token/ERC20/extensions/IERC20Metadata.sol      |  28 ++
 .../contracts/utils/Address.sol                    | 222 ++++++++++
 .../contracts/utils/Context.sol                    |  24 +
 .../contracts/utils/introspection/IERC165.sol      |  25 ++
 .../implementation/meta.txt                        |   2 +
 .../src/universal/IOptimismMintableERC20.sol       |  31 ++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../src/universal/OptimismMintableERC20.sol        | 140 ++++++
 .../src/universal/OptimismMintableERC20Factory.sol | 132 ++++++
 .../proxy/contracts/universal/Proxy.sol            | 217 +++++++++
 .../OptimismMintableERC20Factory/proxy/meta.txt    |   2 +
 .../OptimismPortal/implementation/meta.txt         |   2 +-
 .../implementation/src/L1/L2OutputOracle.sol       | 151 ++++---
 .../implementation/src/L1/OptimismPortal.sol       | 100 +++--
 .../implementation/src/L1/SystemConfig.sol         | 166 +++++--
 .../SystemConfig/implementation/meta.txt           |   2 +-
 .../implementation/src/L1/SystemConfig.sol         | 166 +++++--
 73 files changed, 7739 insertions(+), 467 deletions(-)
```

Generated with discovered.json: 0xacb5d4376948d7d85443329dcc1ddcbba2f3598f

# Diff at Thu, 28 Mar 2024 10:32:56 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@dd32bb06b292cc8459fb09925454ee3a90f5c27e block: 19439798
- current block number: 19532035

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19439798 (main branch discovery), not current.

```diff
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 2 (100%)"
    }
```

```diff
    contract ProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 2 (100%)"
    }
```

```diff
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      upgradeability.threshold:
+        "5 of 7 (71%)"
    }
```

```diff
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      upgradeability.threshold:
+        "5 of 7 (71%)"
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      upgradeability.threshold:
+        "4 of 13 (31%)"
    }
```

```diff
    contract SynthetixMultisig (0xEb3107117FEAd7de89Cd14D463D340A2E6917769) {
    +++ description: None
      upgradeability.threshold:
+        "5 of 11 (45%)"
    }
```

Generated with discovered.json: 0xe51a8b638c121d61ad42bd18332c0850a4046684

# Diff at Thu, 14 Mar 2024 00:15:18 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@e9ab5d808868ba1ecef1f4a9acee050bd71c3c54 block: 19411918
- current block number: 19429627

## Description

Optimism uses blobs

## Watched changes

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
-        false
+        true
      values.overhead:
-        188
+        0
      values.scalar:
-        684000
+        "452312848583266388373324160190187140051835877600158453279134670530344387928"
    }
```

Generated with discovered.json: 0xd34811c5c471b7976f33f0c576b6903f21608d61

# Diff at Mon, 11 Mar 2024 12:48:08 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@64454506aee2b4b4e15b121f096369e92ec4cf20 block: 19379201
- current block number: 19411918

## Description

Update OP stack DA handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19379201 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
+        false
    }
```

Generated with discovered.json: 0x73720a3eaa19fcaa23f7cfa430c9ea5d48aa25df

# Diff at Wed, 06 Mar 2024 22:46:02 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@237a9d8802d6b77ea68f596e77a028c3f0e27e68 block: 19210753
- current block number: 19379201

## Description

Introduced SuperchainConfig contract, able to pause the following functions:
OptimismPortal.proveWithdrawalTransaction()
OptimismPortal.finalizeWithdrawalTransaction()
L1CrossDomainMessenger.relayMessage()
StandardBridge.finalizeBridgeERC20()
StandardBridge.finalizeBridgeETH()
L1ERC721Bridge.finalizeBridgeERC721().

## Watched changes

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
    +++ description: None
      upgradeability.implementation:
-        "0x5efa852e92800D1C982711761e45c3FE39a2b6D8"
+        "0x33A032ec93Ec0C492Ec4BF0B30D5f51986E5a314"
      implementations.0:
-        "0x5efa852e92800D1C982711761e45c3FE39a2b6D8"
+        "0x33A032ec93Ec0C492Ec4BF0B30D5f51986E5a314"
      values.version:
-        "1.3.0"
+        "1.11.0"
    }
```

```diff
    contract L1CrossDomainMessenger (0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1) {
    +++ description: None
      upgradeability.implementation:
-        "0x2150Bc3c64cbfDDbaC9815EF615D6AB8671bfe43"
+        "0xa95B24af19f8907390eD15f8348A1a5e6Ccbc5C6"
      implementations.0:
-        "0x2150Bc3c64cbfDDbaC9815EF615D6AB8671bfe43"
+        "0xa95B24af19f8907390eD15f8348A1a5e6Ccbc5C6"
      values.version:
-        "1.4.0"
+        "2.2.0"
      values.paused:
+        false
      values.portal:
+        "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract ProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      values.nonce:
-        0
+        1
    }
```

```diff
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      values.nonce:
-        0
+        1
    }
```

```diff
    contract L1StandardBridge (0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1) {
    +++ description: None
      upgradeability.implementation:
-        "0xBFB731Cd36D26c2a7287716DE857E4380C73A64a"
+        "0x566511a1A09561e2896F8c0fD77E8544E59bFDB0"
      implementations.0:
-        "0xBFB731Cd36D26c2a7287716DE857E4380C73A64a"
+        "0x566511a1A09561e2896F8c0fD77E8544E59bFDB0"
      values.version:
-        "1.1.0"
+        "2.0.0"
      values.otherBridge:
+        "0x4200000000000000000000000000000000000010"
      values.paused:
+        false
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract OptimismPortal (0xbEb5Fc579115071764c7423A4f12eDde41f106Ed) {
    +++ description: None
      upgradeability.implementation:
-        "0x28a55488fef40005309e2DA0040DbE9D300a64AB"
+        "0xaBAbe63514dDd6277356F8cc3d6518aA8BDEB4de"
      implementations.0:
-        "0x28a55488fef40005309e2DA0040DbE9D300a64AB"
+        "0xaBAbe63514dDd6277356F8cc3d6518aA8BDEB4de"
      values.version:
-        "1.6.0"
+        "2.4.0"
      values.guardian:
+        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.l2Oracle:
+        "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.systemConfig:
+        "0x229047fed2591dbec1eF1118d64F7aF3dB9EB290"
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      values.nonce:
-        0
+        1
    }
```

```diff
    contract L2OutputOracle (0xdfe97868233d1aa22e815a266982f2cf17685a27) {
    +++ description: None
      upgradeability.implementation:
-        "0xd2E67B6a032F0A9B1f569E63ad6C38f7342c2e00"
+        "0xDb5d932AF15D00F879CaBEbf008caDAAAa691e06"
      implementations.0:
-        "0xd2E67B6a032F0A9B1f569E63ad6C38f7342c2e00"
+        "0xDb5d932AF15D00F879CaBEbf008caDAAAa691e06"
      values.version:
-        "1.3.0"
+        "1.7.0"
      values.challenger:
+        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.finalizationPeriodSeconds:
+        604800
      values.l2BlockTime:
+        2
      values.proposer:
+        "0x473300df21D047806A082244b417f96b32f13A33"
      values.submissionInterval:
+        1800
    }
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C)
    +++ description: None
```

## Source code changes

```diff
.../L1/L1CrossDomainMessenger.sol => /dev/null     |  67 ---
 .../contracts/L1/L2OutputOracle.sol => /dev/null   | 350 -------------
 .../contracts/L1/SystemConfig.sol => /dev/null     | 297 -----------
 .../libraries/Arithmetic.sol => /dev/null          |  48 --
 .../contracts/libraries/Burn.sol => /dev/null      |  42 --
 .../contracts/libraries/Bytes.sol => /dev/null     | 142 ------
 .../contracts/libraries/Constants.sol => /dev/null |  49 --
 .../contracts/libraries/Encoding.sol => /dev/null  | 162 ------
 .../contracts/libraries/Hashing.sol => /dev/null   | 172 -------
 .../libraries/Predeploys.sol => /dev/null          | 112 ----
 .../contracts/libraries/SafeCall.sol => /dev/null  | 160 ------
 .../contracts/libraries/Types.sol => /dev/null     |  84 ---
 .../libraries/rlp/RLPWriter.sol => /dev/null       | 221 --------
 .../trie/SecureMerkleTrie.sol => /dev/null         |  64 ---
 .../CrossDomainMessenger.sol => /dev/null          | 519 -------------------
 .../contracts/universal/Semver.sol => /dev/null    |  58 ---
 .../contracts/proxy/utils/Initializable.sol        |   0
 .../contracts/utils/Address.sol                    |   0
 .../contracts/utils/math/Math.sol                  |   0
 .../contracts/utils/math/SignedMath.sol            |   0
 .../contracts}/access/OwnableUpgradeable.sol       |   0
 .../contracts}/proxy/utils/Initializable.sol       |   0
 .../contracts}/utils/AddressUpgradeable.sol        |   0
 .../contracts}/utils/ContextUpgradeable.sol        |   0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |   0
 .../L1CrossDomainMessenger/implementation/meta.txt |   2 +-
 .../contracts/utils/Strings.sol => /dev/null       |  75 ---
 .../src/L1/L1CrossDomainMessenger.sol              |  66 +++
 .../implementation/src/L1/L2OutputOracle.sol       | 296 +++++++++++
 .../implementation/src}/L1/OptimismPortal.sol      | 440 +++++++---------
 .../implementation/src}/L1/ResourceMetering.sol    | 124 ++---
 .../implementation/src/L1/SuperchainConfig.sol     |  94 ++++
 .../implementation/src/L1/SystemConfig.sol         | 255 ++++++++++
 .../implementation/src/libraries/Arithmetic.sol    |  28 +
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Bytes.sol         | 144 ++++++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Encoding.sol      | 176 +++++++
 .../implementation/src/libraries/Hashing.sol       | 124 +++++
 .../implementation/src/libraries/Predeploys.sol    | 113 +++++
 .../implementation/src/libraries/SafeCall.sol      | 142 ++++++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/libraries/Types.sol         |  70 +++
 .../src}/libraries/rlp/RLPReader.sol               | 249 +++------
 .../implementation/src/libraries/rlp/RLPWriter.sol | 163 ++++++
 .../src}/libraries/trie/MerkleTrie.sol             | 210 +++-----
 .../src/libraries/trie/SecureMerkleTrie.sol        |  49 ++
 .../src/universal/CrossDomainMessenger.sol         | 400 +++++++++++++++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../src}/vendor/AddressAliasHelper.sol             |   0
 .../contracts/L1/L1StandardBridge.sol => /dev/null | 364 -------------
 .../libraries/Arithmetic.sol => /dev/null          |  48 --
 .../contracts/libraries/Burn.sol => /dev/null      |  42 --
 .../contracts/libraries/Constants.sol => /dev/null |  49 --
 .../contracts/libraries/Encoding.sol => /dev/null  | 162 ------
 .../contracts/libraries/Hashing.sol => /dev/null   | 172 -------
 .../libraries/Predeploys.sol => /dev/null          | 112 ----
 .../contracts/libraries/SafeCall.sol => /dev/null  | 160 ------
 .../contracts/libraries/Types.sol => /dev/null     |  84 ---
 .../libraries/rlp/RLPWriter.sol => /dev/null       | 221 --------
 .../CrossDomainMessenger.sol => /dev/null          | 519 -------------------
 .../OptimismMintableERC20.sol => /dev/null         | 149 ------
 .../contracts/universal/Semver.sol => /dev/null    |  58 ---
 .../universal/StandardBridge.sol => /dev/null      | 561 ---------------------
 .../contracts/proxy/utils/Initializable.sol        |   0
 .../contracts/token/ERC20/ERC20.sol                |   0
 .../contracts/token/ERC20/IERC20.sol               |   0
 .../token/ERC20/extensions/IERC20Metadata.sol      |   0
 .../token/ERC20/extensions/draft-IERC20Permit.sol  |   0
 .../contracts/token/ERC20/utils/SafeERC20.sol      |   0
 .../contracts/utils/Address.sol                    |   0
 .../contracts/utils/Context.sol                    |   0
 .../utils/introspection/ERC165Checker.sol          |   0
 .../contracts/utils/introspection/IERC165.sol      |   0
 .../contracts/utils/math/Math.sol                  |   0
 .../contracts/utils/math/SignedMath.sol            |   0
 .../contracts}/proxy/utils/Initializable.sol       |   0
 .../contracts}/utils/AddressUpgradeable.sol        |   0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |   0
 .../L1StandardBridge/implementation/meta.txt       |   2 +-
 .../contracts/utils/Strings.sol => /dev/null       |  75 ---
 .../implementation/src/L1/L1StandardBridge.sol     | 317 ++++++++++++
 .../implementation/src}/L1/ResourceMetering.sol    | 124 ++---
 .../implementation/src/L1/SuperchainConfig.sol     |  94 ++++
 .../implementation/src/libraries/Arithmetic.sol    |  28 +
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Encoding.sol      | 176 +++++++
 .../implementation/src/libraries/Hashing.sol       | 124 +++++
 .../implementation/src/libraries/Predeploys.sol    | 113 +++++
 .../implementation/src/libraries/SafeCall.sol      | 142 ++++++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/libraries/Types.sol         |  70 +++
 .../implementation/src/libraries/rlp/RLPWriter.sol | 163 ++++++
 .../src/universal/CrossDomainMessenger.sol         | 400 +++++++++++++++
 .../src}/universal/IOptimismMintableERC20.sol      |  21 +-
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../src/universal/OptimismMintableERC20.sol        | 140 +++++
 .../src/universal/StandardBridge.sol               | 475 +++++++++++++++++
 .../contracts/L1/L2OutputOracle.sol => /dev/null   | 350 -------------
 .../contracts/libraries/Types.sol => /dev/null     |  84 ---
 .../contracts/universal/Semver.sol => /dev/null    |  58 ---
 .../contracts/proxy/utils/Initializable.sol        |   0
 .../contracts/utils/Address.sol                    |   0
 .../contracts/utils/math/Math.sol                  |   0
 .../contracts/utils/math/SignedMath.sol            |   0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |   0
 .../L2OutputOracle/implementation/meta.txt         |   2 +-
 .../contracts/utils/Strings.sol => /dev/null       |  75 ---
 .../implementation/src/L1/L2OutputOracle.sol       | 296 +++++++++++
 .../implementation/src}/L1/ResourceMetering.sol    | 124 ++---
 .../implementation/src/libraries/Arithmetic.sol    |  28 +
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Types.sol         |  70 +++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../contracts/L1/L2OutputOracle.sol => /dev/null   | 350 -------------
 .../contracts/L1/SystemConfig.sol => /dev/null     | 297 -----------
 .../libraries/Arithmetic.sol => /dev/null          |  48 --
 .../contracts/libraries/Burn.sol => /dev/null      |  42 --
 .../contracts/libraries/Bytes.sol => /dev/null     | 142 ------
 .../contracts/libraries/Constants.sol => /dev/null |  49 --
 .../contracts/libraries/Encoding.sol => /dev/null  | 162 ------
 .../contracts/libraries/Hashing.sol => /dev/null   | 172 -------
 .../contracts/libraries/SafeCall.sol => /dev/null  | 160 ------
 .../contracts/libraries/Types.sol => /dev/null     |  84 ---
 .../libraries/rlp/RLPWriter.sol => /dev/null       | 221 --------
 .../trie/SecureMerkleTrie.sol => /dev/null         |  64 ---
 .../contracts/universal/Semver.sol => /dev/null    |  58 ---
 .../contracts/proxy/utils/Initializable.sol        |   0
 .../contracts/utils/Address.sol                    |   0
 .../contracts/utils/math/Math.sol                  |   0
 .../contracts/utils/math/SignedMath.sol            |   0
 .../contracts}/access/OwnableUpgradeable.sol       |   0
 .../contracts}/proxy/utils/Initializable.sol       |   0
 .../contracts}/utils/AddressUpgradeable.sol        |   0
 .../contracts}/utils/ContextUpgradeable.sol        |   0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |   0
 .../OptimismPortal/implementation/meta.txt         |   2 +-
 .../contracts/utils/Strings.sol => /dev/null       |  75 ---
 .../implementation/src/L1/L2OutputOracle.sol       | 296 +++++++++++
 .../implementation/src}/L1/OptimismPortal.sol      | 440 +++++++---------
 .../implementation/src/L1/ResourceMetering.sol     | 162 ++++++
 .../implementation/src/L1/SuperchainConfig.sol     |  94 ++++
 .../implementation/src/L1/SystemConfig.sol         | 255 ++++++++++
 .../implementation/src/libraries/Arithmetic.sol    |  28 +
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Bytes.sol         | 144 ++++++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Encoding.sol      | 176 +++++++
 .../implementation/src/libraries/Hashing.sol       | 124 +++++
 .../implementation/src/libraries/SafeCall.sol      | 142 ++++++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/libraries/Types.sol         |  70 +++
 .../src}/libraries/rlp/RLPReader.sol               | 249 +++------
 .../implementation/src/libraries/rlp/RLPWriter.sol | 163 ++++++
 .../src}/libraries/trie/MerkleTrie.sol             | 210 +++-----
 .../src/libraries/trie/SecureMerkleTrie.sol        |  49 ++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../src}/vendor/AddressAliasHelper.sol             |   0
 .../contracts/proxy/utils/Initializable.sol        |   0
 .../contracts/utils/Address.sol                    |   0
 .../.code/SuperchainConfig/implementation/meta.txt |   2 +
 .../implementation/src/L1/SuperchainConfig.sol     |  94 ++++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/universal/ISemver.sol       |  13 +
 .../contracts/proxy/utils/Initializable.sol        | 138 +++++
 .../contracts/utils/Address.sol                    | 222 ++++++++
 .../contracts/utils/math/Math.sol                  | 226 +++++++++
 .../contracts/utils/math/SignedMath.sol            |  43 ++
 .../lib/solmate/src/utils/FixedPointMathLib.sol    | 366 ++++++++++++++
 .../ethereum/.code/SuperchainConfig/proxy/meta.txt |   2 +
 .../proxy/src}/L1/ResourceMetering.sol             | 116 ++---
 .../proxy/src/libraries/Arithmetic.sol             |  28 +
 .../SuperchainConfig/proxy/src/libraries/Burn.sol  |  32 ++
 .../proxy/src/libraries/Constants.sol              |  46 ++
 .../SuperchainConfig/proxy/src/universal/Proxy.sol | 168 ++++++
 .../contracts/L1/SystemConfig.sol => /dev/null     | 297 -----------
 .../libraries/Arithmetic.sol => /dev/null          |  48 --
 .../contracts/libraries/Burn.sol => /dev/null      |  42 --
 .../contracts/universal/Semver.sol => /dev/null    |  58 ---
 .../contracts/proxy/utils/Initializable.sol        | 138 +++++
 .../contracts/utils/Address.sol                    | 222 ++++++++
 .../contracts/utils/math/Math.sol                  | 226 +++++++++
 .../contracts/utils/math/SignedMath.sol            |  43 ++
 .../contracts}/access/OwnableUpgradeable.sol       |   0
 .../contracts}/proxy/utils/Initializable.sol       |   0
 .../contracts}/utils/AddressUpgradeable.sol        |   0
 .../contracts}/utils/ContextUpgradeable.sol        |   0
 .../lib/solmate/src/utils/FixedPointMathLib.sol    | 366 ++++++++++++++
 .../SystemConfig/implementation/meta.txt           |   2 +-
 .../contracts/utils/Strings.sol => /dev/null       |  75 ---
 .../implementation/src/L1/ResourceMetering.sol     | 162 ++++++
 .../implementation/src/L1/SystemConfig.sol         | 255 ++++++++++
 .../implementation/src/libraries/Arithmetic.sol    |  28 +
 .../implementation/src/libraries/Burn.sol          |  32 ++
 .../implementation/src/libraries/Constants.sol     |  46 ++
 .../implementation/src/libraries/Storage.sol       |  88 ++++
 .../implementation/src/universal/ISemver.sol       |  13 +
 199 files changed, 11029 insertions(+), 9871 deletions(-)
```

Generated with discovered.json: 0x7e4c9076131acf85de578916eb5cfca1e750a721

# Diff at Mon, 12 Feb 2024 08:28:31 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@ddc21751860f919d2bc4b19eb9fd41d3f26acdf2 block: 19176787
- current block number: 19210753

## Description

The Security Council is introduced, but with a 4/13 threshold. Now the multisig owning the ProxyAdmin is a 2/2 with the Foundation multisig and the Security Council multisig.

## Watched changes

```diff
    contract ProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
      values.owner:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A"
    }
```

```diff
+   Status: CREATED
    contract ProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    }
```

```diff
+   Status: CREATED
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    }
```

```diff
+   Status: CREATED
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    }
```

## Source code changes

```diff
.../implementation/GnosisSafe.sol                  | 422 +++++++++++++++++++++
 .../implementation/base/Executor.sol               |  27 ++
 .../implementation/base/FallbackManager.sol        |  53 +++
 .../implementation/base/GuardManager.sol           |  50 +++
 .../implementation/base/ModuleManager.sol          | 133 +++++++
 .../implementation/base/OwnerManager.sol           | 149 ++++++++
 .../implementation/common/Enum.sol                 |   8 +
 .../implementation/common/EtherPaymentFallback.sol |  13 +
 .../implementation/common/SecuredTokenTransfer.sol |  35 ++
 .../implementation/common/SelfAuthorized.sol       |  16 +
 .../implementation/common/SignatureDecoder.sol     |  36 ++
 .../implementation/common/Singleton.sol            |  11 +
 .../implementation/common/StorageAccessible.sol    |  47 +++
 .../implementation/external/GnosisSafeMath.sol     |  54 +++
 .../interfaces/ISignatureValidator.sol             |  20 +
 .../FoundationMultisig_1/implementation/meta.txt   |   2 +
 .../FoundationMultisig_1/proxy/GnosisSafeProxy.sol | 155 ++++++++
 .../.code/FoundationMultisig_1/proxy/meta.txt      |   2 +
 .../ProxyAdminOwner/implementation/GnosisSafe.sol  | 422 +++++++++++++++++++++
 .../implementation/base/Executor.sol               |  27 ++
 .../implementation/base/FallbackManager.sol        |  53 +++
 .../implementation/base/GuardManager.sol           |  50 +++
 .../implementation/base/ModuleManager.sol          | 133 +++++++
 .../implementation/base/OwnerManager.sol           | 149 ++++++++
 .../ProxyAdminOwner/implementation/common/Enum.sol |   8 +
 .../implementation/common/EtherPaymentFallback.sol |  13 +
 .../implementation/common/SecuredTokenTransfer.sol |  35 ++
 .../implementation/common/SelfAuthorized.sol       |  16 +
 .../implementation/common/SignatureDecoder.sol     |  36 ++
 .../implementation/common/Singleton.sol            |  11 +
 .../implementation/common/StorageAccessible.sol    |  47 +++
 .../implementation/external/GnosisSafeMath.sol     |  54 +++
 .../interfaces/ISignatureValidator.sol             |  20 +
 .../.code/ProxyAdminOwner/implementation/meta.txt  |   2 +
 .../ProxyAdminOwner/proxy/GnosisSafeProxy.sol      | 155 ++++++++
 .../ethereum/.code/ProxyAdminOwner/proxy/meta.txt  |   2 +
 .../implementation/GnosisSafe.sol                  | 422 +++++++++++++++++++++
 .../implementation/base/Executor.sol               |  27 ++
 .../implementation/base/FallbackManager.sol        |  53 +++
 .../implementation/base/GuardManager.sol           |  50 +++
 .../implementation/base/ModuleManager.sol          | 133 +++++++
 .../implementation/base/OwnerManager.sol           | 149 ++++++++
 .../implementation/common/Enum.sol                 |   8 +
 .../implementation/common/EtherPaymentFallback.sol |  13 +
 .../implementation/common/SecuredTokenTransfer.sol |  35 ++
 .../implementation/common/SelfAuthorized.sol       |  16 +
 .../implementation/common/SignatureDecoder.sol     |  36 ++
 .../implementation/common/Singleton.sol            |  11 +
 .../implementation/common/StorageAccessible.sol    |  47 +++
 .../implementation/external/GnosisSafeMath.sol     |  54 +++
 .../interfaces/ISignatureValidator.sol             |  20 +
 .../implementation/meta.txt                        |   2 +
 .../proxy/GnosisSafeProxy.sol                      | 155 ++++++++
 .../.code/SecurityCouncilMultisig/proxy/meta.txt   |   2 +
 54 files changed, 3699 insertions(+)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19176787 (main branch discovery), not current.

```diff
    contract OptimismMultisig (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
      name:
-        "OptimismMultisig"
+        "FoundationMultisig_2"
    }
```

Generated with discovered.json: 0x75bf0a1e7f3ca34a61085103177321849b59f9c2

# Diff at Wed, 07 Feb 2024 14:04:10 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@2e35800e01005d93332a552032058dcd67f3631d block: 19175199
- current block number: 19176787

## Description

Added opStackSequencerInbox handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19175199 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
      values.sequencerInbox:
+        "0xFF00000000000000000000000000000000000010"
    }
```

Generated with discovered.json: 0x76f079bbf5d43c3c9139458655bfbd274ddbfa2a

# Diff at Wed, 07 Feb 2024 08:43:05 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@64f1e0f27f831d3ef860a1c2faad8c77e04e6c29 block: 19126648
- current block number: 19175199

## Description

Updated with the new OpDAHandler to remove the field.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19126648 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
      values.opStackDA.isAllTxsLengthEqualToCelestiaDAExample:
-        false
    }
```

Generated with discovered.json: 0x7bc6699d72e87e966f09a1f8d9b0661ffdb9ab81

# Diff at Wed, 31 Jan 2024 13:05:49 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@74040c3a8f43c630b3d31cc8376e84f5f9acda5c block: 18975204
- current block number: 19126648

## Description

Added opStackDa handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 18975204 (main branch discovery), not current.

```diff
    contract SystemConfig (0x229047fed2591dbec1eF1118d64F7aF3dB9EB290) {
      values.opStackDA:
+        {"isAllTxsLengthEqualToCelestiaDAExample":false,"isSomeTxsLengthEqualToCelestiaDAExample":false}
    }
```

# Diff at Wed, 10 Jan 2024 07:58:12 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: master@e2e6b511762816f77296c91449de9dfcd2aa348b block: 18961956
- current block number: 18975204

## Description

Renamed contract to be consistent with template.

## Config related changes

Following changes come from updates made to the config file,
not from differences found during discovery. Values are
for block 18961956 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessengerProxy (0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1) {
      name:
-        "L1CrossDomainMessengerProxy"
+        "L1CrossDomainMessenger"
    }
```

# Diff at Mon, 08 Jan 2024 11:19:28 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: master@255faead9c908eabe1ba60518df6fac59f9743e0 block: 18927148
- current block number: 18961956

## Description

One owner is removed from SynthetixMultisig (now 5/11).

## Watched changes

```diff
    contract SynthetixMultisig (0xEb3107117FEAd7de89Cd14D463D340A2E6917769) {
      values.getOwners[11]:
-        "0xEde8a407913A874Dd7e3d5B731AFcA135D30375E"
      values.getOwners.10:
-        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
+        "0xEde8a407913A874Dd7e3d5B731AFcA135D30375E"
      values.getOwners.9:
-        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
+        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
      values.getOwners.8:
-        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
+        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
      values.getOwners.7:
-        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
+        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
      values.getOwners.6:
-        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
+        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
      values.getOwners.5:
-        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
+        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
      values.getOwners.4:
-        "0x6985b94Db148eDd4df6BD1Ba3F4640da79B44947"
+        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
      values.getOwners.0:
-        "0xd9b891AB93C210eafa46c61fAeb53836F99aa35B"
+        "0x26E10fF641839cA457695CE955Cb90657D6E3F53"
    }
```

# Diff at Wed, 03 Jan 2024 13:33:11 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: master@2a4dee9ce3e9f4d9aa3c1d39fafd6ff2ba608ba2

## Description

SynthetixMultisig has removed one owner. We are not showing it on the frontend. If it changes often, we can ignore it but for now I'll leave it as it is.

## Watched changes

```diff
    contract SynthetixMultisig (0xEb3107117FEAd7de89Cd14D463D340A2E6917769) {
      values.getOwners[12]:
-        "0xEde8a407913A874Dd7e3d5B731AFcA135D30375E"
      values.getOwners.11:
-        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
+        "0xEde8a407913A874Dd7e3d5B731AFcA135D30375E"
      values.getOwners.10:
-        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
+        "0x562948111d50BF039A39Eea48D127f2Ae51ddF02"
      values.getOwners.9:
-        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
+        "0x1dd532CF7603a60C3ec91360f273DA3Db38545aB"
      values.getOwners.8:
-        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
+        "0x2d8cF727d37e7277D5eeDbAb853a3e8320f767Cd"
      values.getOwners.7:
-        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
+        "0x347c3190bD015FBD0e47fb90AA4917138A8A32FE"
      values.getOwners.6:
-        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
+        "0xa2fa6Ef1Fcf740b632a04B3FC56B5d3118Bbd211"
      values.getOwners.5:
-        "0x6985b94Db148eDd4df6BD1Ba3F4640da79B44947"
+        "0x599e835cbFC903eF09f3Dd5E08D1cF63c32AF8d8"
      values.getOwners.4:
-        "0xe1Efa5C91cA533E4a51884d805879249E3FCB2BC"
+        "0x6985b94Db148eDd4df6BD1Ba3F4640da79B44947"
      values.getOwners.3:
-        "0x8909F73188C4fE68B283fCB1E724b2466e0BdfD0"
+        "0xe1Efa5C91cA533E4a51884d805879249E3FCB2BC"
      values.getOwners.2:
-        "0x0B67bab43157e53D21965Af0d83f83BeD9553E0a"
+        "0x8909F73188C4fE68B283fCB1E724b2466e0BdfD0"
      values.getOwners.1:
-        "0xd9b891AB93C210eafa46c61fAeb53836F99aa35B"
+        "0x0B67bab43157e53D21965Af0d83f83BeD9553E0a"
      values.getOwners.0:
-        "0x28Ed18Bd77A061E0A886a2a8FFb91da95FF03E56"
+        "0xd9b891AB93C210eafa46c61fAeb53836F99aa35B"
    }
```

# Diff at Tue, 26 Sep 2023 08:05:22 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: master@cfd4e281f2af40c7c69302b16c1308c0c5651be0

## Watched changes

```diff
    contract L2OutputOracle (0xdfe97868233d1aa22e815a266982f2cf17685a27) {
      values.deletedOutputs:
+        []
    }
```
