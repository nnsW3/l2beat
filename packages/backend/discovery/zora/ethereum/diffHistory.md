Generated with discovered.json: 0xf1f52a12f38d5ac8c3d6e74425b76a514f598ece

# Diff at Tue, 30 Jul 2024 11:16:57 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20276973
- current block number: 20276973

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20276973 (main branch discovery), not current.

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

Generated with discovered.json: 0x6a08ee988cc87ab03ea7d4e25e8b0a2c0cff4238

# Diff at Thu, 18 Jul 2024 10:34:33 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 20276973
- current block number: 20276973

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20276973 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: None
      values.livenessInterval:
-        8467200
+        "98d"
      template:
+        "gnosisSafeModules/LivenessModule"
      descriptions:
+        ["used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig"]
    }
```

```diff
    contract GuardianMultisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      name:
-        "GuardianMultisig"
+        "SuperchainGuardianMultisig"
    }
```

```diff
    contract OptimismPortal (0x1a0ad011913A150f69f6A19DF447A0CfD9551054) {
    +++ description: None
      descriptions.0:
-        "The main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals."
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      descriptions:
+        ["Liveness Guard of 0x0454092516c9A4d636d3CAfA1e82161376C8a748 - used to remove members inactive for 98d."]
    }
```

```diff
    contract L1StandardBridge (0x3e2Ea9B92B7E48A52296fD261dc26fd995284631) {
    +++ description: None
      descriptions.0:
-        "The main entry point to deposit ERC20 tokens from L1 to L2. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      descriptions:
+        ["It can act on behalf of 0xD4ef175B9e72cAEe9f1fe7660a6Ec19009903b49, inheriting its permissions."]
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      descriptions:
+        ["It can act on behalf of 0x543bA4AADBAb8f9025686Bd03993043599c6fB04, inheriting its permissions."]
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
    contract L1ERC721Bridge (0x83A4521A3573Ca87f3a971B169C5A0E1d34481c3) {
    +++ description: None
      descriptions.0:
-        "Used to bridge ERC-721 tokens from L1 to L2"
+        "Used to bridge ERC-721 tokens from host chain to this chain."
    }
```

```diff
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      descriptions:
+        ["Fallback Owner of 0x0454092516c9A4d636d3CAfA1e82161376C8a748 - takes ownership of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 if the number of members falls below 8."]
    }
```

```diff
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      descriptions:
+        ["Deputy Guardian of 0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8. It can act on behalf of the 0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2."]
    }
```

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: None
      descriptions.0:
-        "Contains configuration parameters such as the Sequencer address, the L2 gas limit and the unsafe block signer address."
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract OptimismMintableERC20Factory (0xc52BC7344e24e39dF1bf026fe05C4e6E23CfBcFf) {
    +++ description: None
      descriptions.0:
-        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as the L2 representation of an L1 token, or vice-versa."
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

```diff
    contract ZoraMultisig (0xC72aE5c7cc9a332699305E29F68Be66c73b60542) {
    +++ description: None
      descriptions:
+        ["It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."]
    }
```

```diff
    contract ProxyAdmin (0xD4ef175B9e72cAEe9f1fe7660a6Ec19009903b49) {
    +++ description: None
      descriptions:
+        ["It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component."]
    }
```

```diff
    contract L1CrossDomainMessenger (0xdC40a14d9abd6F410226f1E6de71aE03441ca506) {
    +++ description: None
      descriptions.0:
-        "Sends messages from L1 to L2, and relays messages from L2 onto L1. In the event that a message sent from L1 to L2 is rejected for exceeding the L2 epoch gas limit, it can be resubmitted via this contract's replay function."
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

Generated with discovered.json: 0xfd92703a468b61bbf9b834d1c4bd44ab2fc1c1f9

# Diff at Fri, 28 Jun 2024 07:32:22 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@555efdd96fadc389c2c70beacf820125fbb25a7d block: 20073649
- current block number: 20188709

## Description

Nonce of foundation multisig increased, after executing transaction to change the owner of the SystemConfig contract.

## Watched changes

```diff
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      values.nonce:
-        92
+        93
    }
```

Generated with discovered.json: 0x1565e8344e9f1419d5529f2605d544bb8288f451

# Diff at Wed, 12 Jun 2024 05:26:43 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@09246cd19afe46cf207c325923fef8f51d581735 block: 20032759
- current block number: 20073649

## Description

Changes due to Superchain permissions upgrade: 
- Security Council MS threshold raised
- Liveness and DeputyGuardian modules added
- Guardian (proxy)MS added

## Watched changes

```diff
    contract OptimismPortal (0x1a0ad011913A150f69f6A19DF447A0CfD9551054) {
    +++ description: None
      values.guardian:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.GUARDIAN:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
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
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeputyGuardianModule (0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8)
    +++ description: None
```

## Source code changes

```diff
.../zora/ethereum/.flat/DeputyGuardianModule.sol   | 139 +++
 .../ethereum/.flat/GuardianMultisig/GnosisSafe.sol | 952 +++++++++++++++++++++
 .../.flat/GuardianMultisig/GnosisSafeProxy.p.sol   |  34 +
 .../zora/ethereum/.flat/LivenessGuard.sol          | 581 +++++++++++++
 .../zora/ethereum/.flat/LivenessModule.sol         | 257 ++++++
 5 files changed, 1963 insertions(+)
```

Generated with discovered.json: 0x209e13e4a7a74a8fd077a54e66bb0c08c528e44b

# Diff at Thu, 06 Jun 2024 12:23:14 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@5302ef2899ddfb7175df497ceaa47fba4e383655 block: 19982489
- current block number: 20032759

## Description

Discovery output now includes names of templates used for contract analysis.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19982489 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x1a0ad011913A150f69f6A19DF447A0CfD9551054) {
    +++ description: None
      template:
+        "opstack/OptimismPortal"
    }
```

```diff
    contract L1StandardBridge (0x3e2Ea9B92B7E48A52296fD261dc26fd995284631) {
    +++ description: None
      template:
+        "opstack/L1StandardBridge"
    }
```

```diff
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract L1ERC721Bridge (0x83A4521A3573Ca87f3a971B169C5A0E1d34481c3) {
    +++ description: None
      template:
+        "opstack/L1ERC721Bridge"
    }
```

```diff
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: None
      template:
+        "opstack/SuperchainConfig"
    }
```

```diff
    contract L2OutputOracle (0x9E6204F750cD866b299594e2aC9eA824E2e5f95c) {
    +++ description: None
      template:
+        "opstack/L2OutputOracle"
    }
```

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: None
      template:
+        "opstack/SystemConfig"
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract OptimismMintableERC20Factory (0xc52BC7344e24e39dF1bf026fe05C4e6E23CfBcFf) {
    +++ description: None
      template:
+        "opstack/OptimismMintableERC20Factory"
    }
```

```diff
    contract ZoraMultisig (0xC72aE5c7cc9a332699305E29F68Be66c73b60542) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract ChallengerMultisig (0xcA4571b1ecBeC86Ea2E660d242c1c29FcB55Dc72) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract L1CrossDomainMessenger (0xdC40a14d9abd6F410226f1E6de71aE03441ca506) {
    +++ description: None
      template:
+        "opstack/L1CrossDomainMessenger"
    }
```

Generated with discovered.json: 0x971b070707f5c7c01728fdc8f02fb4e6903fec67

# Diff at Wed, 22 May 2024 20:13:47 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@bac4efad06804152ae97853892e122a801bbc509 block: 19918824
- current block number: 19927731

## Description

ConduitMultisig update.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      upgradeability.threshold:
-        "3 of 5 (60%)"
+        "4 of 7 (57%)"
      values.getOwners.6:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.getOwners.5:
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.getOwners.4:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.getOwners.3:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.getOwners.2:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.getOwners.1:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.getOwners.0:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.getThreshold:
-        3
+        4
    }
```

Generated with discovered.json: 0x955a49539e1f6baa91668db00391e64a1514bd69

# Diff at Tue, 21 May 2024 14:17:58 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@c032520e456d0e6bee8b65e420ff7dba9f36bd48 block: 19899230
- current block number: 19918824

## Description

Name change.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19899230 (main branch discovery), not current.

```diff
    contract ProxyAdminOwner (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      name:
-        "ProxyAdminOwner"
+        "ConduitMultisig"
    }
```

Generated with discovered.json: 0xcc1f9152d1491cb00098c97abc3752bdd4157874

# Diff at Mon, 22 Apr 2024 14:42:15 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@d4b694a74243557c5ded556721185672f6639b7c block: 19532317
- current block number: 19711603

## Description

The project now uses shared implementations with other projects in the Superchain and a shared Guardian (OP Foundation).

## Watched changes

```diff
    contract OptimismPortal (0x1a0ad011913A150f69f6A19DF447A0CfD9551054) {
    +++ description: None
      upgradeability.implementation:
-        "0x43260ee547c3965bb2a0174763bb8FEcC650BA4A"
+        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
      implementations.0:
-        "0x43260ee547c3965bb2a0174763bb8FEcC650BA4A"
+        "0x2D778797049FE9259d947D1ED8e5442226dFB589"
      values.GUARDIAN:
-        "0xC72aE5c7cc9a332699305E29F68Be66c73b60542"
+        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.version:
-        "1.6.0"
+        "2.5.0"
      values.guardian:
+        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.l2Oracle:
+        "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.systemConfig:
+        "0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86"
    }
```

```diff
    contract L1StandardBridge (0x3e2Ea9B92B7E48A52296fD261dc26fd995284631) {
    +++ description: None
      upgradeability.implementation:
-        "0xbF6acaF315477b15D638bf4d91eA48FA79b58335"
+        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      implementations.0:
-        "0xbF6acaF315477b15D638bf4d91eA48FA79b58335"
+        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      values.version:
-        "1.1.0"
+        "2.1.0"
      values.otherBridge:
+        "0x4200000000000000000000000000000000000010"
      values.paused:
+        false
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract L1ERC721Bridge (0x83A4521A3573Ca87f3a971B169C5A0E1d34481c3) {
    +++ description: None
      upgradeability.implementation:
-        "0xDBCdA21518AF39E7feb9748F6718D3db11591461"
+        "0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
      implementations.0:
-        "0xDBCdA21518AF39E7feb9748F6718D3db11591461"
+        "0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
      values.version:
-        "1.1.1"
+        "2.1.0"
      values.paused:
+        false
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract L2OutputOracle (0x9E6204F750cD866b299594e2aC9eA824E2e5f95c) {
    +++ description: None
      upgradeability.implementation:
-        "0x9eedde6b4D3263b97209Ba860eDF3Fc6a8fB6a44"
+        "0xF243BEd163251380e78068d317ae10f26042B292"
      implementations.0:
-        "0x9eedde6b4D3263b97209Ba860eDF3Fc6a8fB6a44"
+        "0xF243BEd163251380e78068d317ae10f26042B292"
      values.version:
-        "1.3.0"
+        "1.8.0"
      values.challenger:
+        "0xcA4571b1ecBeC86Ea2E660d242c1c29FcB55Dc72"
      values.finalizationPeriodSeconds:
+        604800
      values.l2BlockTime:
+        2
      values.proposer:
+        "0x48247032092e7b0ecf5dEF611ad89eaf3fC888Dd"
      values.submissionInterval:
+        1800
    }
```

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: None
      upgradeability.implementation:
-        "0x17fb7c8Ce213F1A7691ee41EA880ABf6eBC6fa95"
+        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
      implementations.0:
-        "0x17fb7c8Ce213F1A7691ee41EA880ABf6eBC6fa95"
+        "0xba2492e52F45651B60B8B38d4Ea5E2390C64Ffb1"
      values.version:
-        "1.3.0"
+        "1.12.0"
      values.BATCH_INBOX_SLOT:
+        "0x71ac12829d66ee73d8d95bff50b3589745ce57edae70a3fb111a2342464dc597"
      values.batchInbox:
+        "0x6F54Ca6F6EdE96662024Ffd61BFd18f3f4e34DFf"
      values.L1_CROSS_DOMAIN_MESSENGER_SLOT:
+        "0x383f291819e6d54073bc9a648251d97421076bdd101933c0c022219ce9580636"
      values.L1_ERC_721_BRIDGE_SLOT:
+        "0x46adcbebc6be8ce551740c29c47c8798210f23f7f4086c41752944352568d5a7"
      values.L1_STANDARD_BRIDGE_SLOT:
+        "0x9904ba90dde5696cda05c9e0dab5cbaa0fea005ace4d11218a02ac668dad6376"
      values.l1CrossDomainMessenger:
+        "0xdC40a14d9abd6F410226f1E6de71aE03441ca506"
      values.l1ERC721Bridge:
+        "0x83A4521A3573Ca87f3a971B169C5A0E1d34481c3"
      values.l1StandardBridge:
+        "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
      values.L2_OUTPUT_ORACLE_SLOT:
+        "0xe52a667f71ec761b9b381c7b76ca9b852adf7e8905da0e0ad49986a0a6871815"
      values.l2OutputOracle:
+        "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      values.OPTIMISM_MINTABLE_ERC20_FACTORY_SLOT:
+        "0xa04c5bb938ca6fc46d95553abf0a76345ce3e722a30bf4f74928b8e7d852320c"
      values.OPTIMISM_PORTAL_SLOT:
+        "0x4b6c74f9e688cb39801f2112c14a8c57232a3fc5202e1444126d4bce86eb19ac"
      values.optimismMintableERC20Factory:
+        "0xc52BC7344e24e39dF1bf026fe05C4e6E23CfBcFf"
      values.optimismPortal:
+        "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
      values.START_BLOCK_SLOT:
+        "0xa11ee3ab75b40e88a0105e935d17cd36c8faee0138320d776c411291bdbbb19f"
      values.startBlock:
+        17473957
    }
```

```diff
    contract OptimismMintableERC20Factory (0xc52BC7344e24e39dF1bf026fe05C4e6E23CfBcFf) {
    +++ description: None
      upgradeability.implementation:
-        "0x84ee4b9673598ca2FbDad4Ba4a27A58D6328Ec46"
+        "0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
      implementations.0:
-        "0x84ee4b9673598ca2FbDad4Ba4a27A58D6328Ec46"
+        "0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
      values.version:
-        "1.1.0"
+        "1.9.0"
      values.bridge:
+        "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
    }
```

```diff
    contract ProxyAdmin (0xD4ef175B9e72cAEe9f1fe7660a6Ec19009903b49) {
    +++ description: None
      values.owner:
-        "0xC72aE5c7cc9a332699305E29F68Be66c73b60542"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract L1CrossDomainMessenger (0xdC40a14d9abd6F410226f1E6de71aE03441ca506) {
    +++ description: None
      upgradeability.implementation:
-        "0x363B4B1ADa52E50353f746999bd9E94395190d2C"
+        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      implementations.0:
-        "0x363B4B1ADa52E50353f746999bd9E94395190d2C"
+        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      values.version:
-        "1.4.0"
+        "2.3.0"
      values.otherMessenger:
+        "0x4200000000000000000000000000000000000007"
      values.paused:
+        false
      values.portal:
+        "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
      values.superchainConfig:
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdminOwner (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FoundationMultisig_1 (0x847B5c174615B1B7fDF770882256e2D3E95b9D92)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Lib_AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F)
    +++ description: None
```

## Source code changes

```diff
.../implementation/contracts/GnosisSafe.sol        |  422 ++++++++
 .../implementation/contracts/base/Executor.sol     |   27 +
 .../contracts/base/FallbackManager.sol             |   53 +
 .../implementation/contracts/base/GuardManager.sol |   50 +
 .../contracts/base/ModuleManager.sol               |  133 +++
 .../implementation/contracts/base/OwnerManager.sol |  149 +++
 .../implementation/contracts/common/Enum.sol       |    8 +
 .../contracts/common/EtherPaymentFallback.sol      |   13 +
 .../contracts/common/SecuredTokenTransfer.sol      |   35 +
 .../contracts/common/SelfAuthorized.sol            |   16 +
 .../contracts/common/SignatureDecoder.sol          |   36 +
 .../implementation/contracts/common/Singleton.sol  |   11 +
 .../contracts/common/StorageAccessible.sol         |   47 +
 .../contracts/external/GnosisSafeMath.sol          |   54 +
 .../contracts/interfaces/ISignatureValidator.sol   |   20 +
 .../FoundationMultisig_1/implementation/meta.txt   |    2 +
 .../FoundationMultisig_1/proxy/GnosisSafeProxy.sol |  155 +++
 .../.code/FoundationMultisig_1/proxy/meta.txt      |    2 +
 .../implementation/GnosisSafe.sol                  | 1076 ++++++++++++++++++++
 .../FoundationMultisig_2/implementation/meta.txt   |    2 +
 .../.code/FoundationMultisig_2/proxy/Proxy.sol     |   41 +
 .../.code/FoundationMultisig_2/proxy/meta.txt      |    2 +
 .../implementation/contracts/GnosisSafe.sol        |  422 ++++++++
 .../implementation/contracts/base/Executor.sol     |   27 +
 .../contracts/base/FallbackManager.sol             |   53 +
 .../implementation/contracts/base/GuardManager.sol |   50 +
 .../contracts/base/ModuleManager.sol               |  133 +++
 .../implementation/contracts/base/OwnerManager.sol |  149 +++
 .../implementation/contracts/common/Enum.sol       |    8 +
 .../contracts/common/EtherPaymentFallback.sol      |   13 +
 .../contracts/common/SecuredTokenTransfer.sol      |   35 +
 .../contracts/common/SelfAuthorized.sol            |   16 +
 .../contracts/common/SignatureDecoder.sol          |   36 +
 .../implementation/contracts/common/Singleton.sol  |   11 +
 .../contracts/common/StorageAccessible.sol         |   47 +
 .../contracts/external/GnosisSafeMath.sol          |   54 +
 .../contracts/interfaces/ISignatureValidator.sol   |   20 +
 .../.code/GnosisSafe/implementation/meta.txt       |    2 +
 .../.code/GnosisSafe/proxy/GnosisSafeProxy.sol     |  155 +++
 .../zora/ethereum/.code/GnosisSafe/proxy/meta.txt  |    2 +
 .../L1/L1CrossDomainMessenger.sol => /dev/null     |   67 --
 .../contracts/L1/L2OutputOracle.sol => /dev/null   |  350 -------
 .../contracts/L1/OptimismPortal.sol => /dev/null   |  507 ---------
 .../contracts/L1/SystemConfig.sol => /dev/null     |  297 ------
 .../libraries/Arithmetic.sol => /dev/null          |   48 -
 .../contracts/libraries/Burn.sol => /dev/null      |   42 -
 .../contracts/libraries/Bytes.sol => /dev/null     |  142 ---
 .../contracts/libraries/Constants.sol => /dev/null |   49 -
 .../contracts/libraries/Encoding.sol => /dev/null  |  162 ---
 .../contracts/libraries/Hashing.sol => /dev/null   |  172 ----
 .../libraries/Predeploys.sol => /dev/null          |  112 --
 .../contracts/libraries/SafeCall.sol => /dev/null  |  160 ---
 .../contracts/libraries/Types.sol => /dev/null     |   84 --
 .../libraries/rlp/RLPWriter.sol => /dev/null       |  221 ----
 .../trie/SecureMerkleTrie.sol => /dev/null         |   64 --
 .../CrossDomainMessenger.sol => /dev/null          |  519 ----------
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/math/Math.sol                  |    0
 .../contracts/utils/math/SignedMath.sol            |    0
 .../contracts}/access/OwnableUpgradeable.sol       |    0
 .../contracts}/proxy/utils/Initializable.sol       |    0
 .../contracts}/utils/AddressUpgradeable.sol        |    0
 .../contracts}/utils/ContextUpgradeable.sol        |    0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |    0
 .../L1CrossDomainMessenger/implementation/meta.txt |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../src/L1/L1CrossDomainMessenger.sol              |   74 ++
 .../implementation/src/L1/L2OutputOracle.sol       |  317 ++++++
 .../implementation/src/L1/OptimismPortal.sol       |  433 ++++++++
 .../implementation/src}/L1/ResourceMetering.sol    |  124 +--
 .../implementation/src/L1/SuperchainConfig.sol     |   94 ++
 .../implementation/src/L1/SystemConfig.sol         |  367 +++++++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Bytes.sol         |  144 +++
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Encoding.sol      |  176 ++++
 .../implementation/src/libraries/Hashing.sol       |  124 +++
 .../implementation/src/libraries/Predeploys.sol    |  113 ++
 .../implementation/src/libraries/SafeCall.sol      |  142 +++
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/libraries/Types.sol         |   70 ++
 .../src}/libraries/rlp/RLPReader.sol               |  249 ++---
 .../implementation/src/libraries/rlp/RLPWriter.sol |  163 +++
 .../src}/libraries/trie/MerkleTrie.sol             |  210 ++--
 .../src/libraries/trie/SecureMerkleTrie.sol        |   49 +
 .../src/universal/CrossDomainMessenger.sol         |  406 ++++++++
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../src}/vendor/AddressAliasHelper.sol             |    0
 .../contracts/L1/L1ERC721Bridge.sol => /dev/null   |  107 --
 .../contracts/L2/L2ERC721Bridge.sol => /dev/null   |  126 ---
 .../libraries/Arithmetic.sol => /dev/null          |   48 -
 .../contracts/libraries/Burn.sol => /dev/null      |   42 -
 .../contracts/libraries/Constants.sol => /dev/null |   49 -
 .../contracts/libraries/Encoding.sol => /dev/null  |  162 ---
 .../contracts/libraries/Hashing.sol => /dev/null   |  172 ----
 .../contracts/libraries/SafeCall.sol => /dev/null  |  104 --
 .../contracts/libraries/Types.sol => /dev/null     |   84 --
 .../libraries/rlp/RLPWriter.sol => /dev/null       |  221 ----
 .../CrossDomainMessenger.sol => /dev/null          |  483 ---------
 .../universal/ERC721Bridge.sol => /dev/null        |  214 ----
 .../IOptimismMintableERC721.sol => /dev/null       |   76 --
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/token/ERC20/ERC20.sol                |    0
 .../contracts/token/ERC20/IERC20.sol               |    0
 .../token/ERC20/extensions/IERC20Metadata.sol      |    0
 .../token/ERC20/extensions/draft-IERC20Permit.sol  |    0
 .../contracts/token/ERC20/utils/SafeERC20.sol      |    0
 .../contracts/token/ERC721/IERC721.sol             |    0
 .../token/ERC721/extensions/IERC721Enumerable.sol  |    0
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/Context.sol                    |    0
 .../utils/introspection/ERC165Checker.sol          |    0
 .../contracts/utils/introspection/IERC165.sol      |    0
 .../contracts/utils/math/Math.sol                  |    0
 .../contracts/utils/math/SignedMath.sol            |    0
 .../contracts}/proxy/utils/Initializable.sol       |    0
 .../contracts}/utils/AddressUpgradeable.sol        |    0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |    0
 .../L1ERC721Bridge/implementation/meta.txt         |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../implementation/src/L1/L1ERC721Bridge.sol       |  121 +++
 .../implementation/src}/L1/ResourceMetering.sol    |  124 +--
 .../implementation/src/L1/SuperchainConfig.sol     |   94 ++
 .../implementation/src/L2/L2ERC721Bridge.sol       |  126 +++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Encoding.sol      |  176 ++++
 .../implementation/src/libraries/Hashing.sol       |  124 +++
 .../implementation/src/libraries/Predeploys.sol    |  113 ++
 .../implementation/src/libraries/SafeCall.sol      |  142 +++
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/libraries/Types.sol         |   70 ++
 .../implementation/src/libraries/rlp/RLPWriter.sol |  163 +++
 .../src/universal/CrossDomainMessenger.sol         |  406 ++++++++
 .../implementation/src/universal/ERC721Bridge.sol  |  195 ++++
 .../src}/universal/IOptimismMintableERC20.sol      |   21 +-
 .../src/universal/IOptimismMintableERC721.sol      |   48 +
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../src/universal/OptimismMintableERC20.sol        |  140 +++
 .../src/universal/StandardBridge.sol               |  489 +++++++++
 .../contracts/L1/L1StandardBridge.sol => /dev/null |  364 -------
 .../libraries/Arithmetic.sol => /dev/null          |   48 -
 .../contracts/libraries/Burn.sol => /dev/null      |   42 -
 .../contracts/libraries/Constants.sol => /dev/null |   49 -
 .../contracts/libraries/Encoding.sol => /dev/null  |  162 ---
 .../contracts/libraries/Hashing.sol => /dev/null   |  172 ----
 .../libraries/Predeploys.sol => /dev/null          |  112 --
 .../contracts/libraries/SafeCall.sol => /dev/null  |  104 --
 .../contracts/libraries/Types.sol => /dev/null     |   84 --
 .../libraries/rlp/RLPWriter.sol => /dev/null       |  221 ----
 .../CrossDomainMessenger.sol => /dev/null          |  483 ---------
 .../OptimismMintableERC20.sol => /dev/null         |  149 ---
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../universal/StandardBridge.sol => /dev/null      |  561 ----------
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/token/ERC20/ERC20.sol                |    0
 .../contracts/token/ERC20/IERC20.sol               |    0
 .../token/ERC20/extensions/IERC20Metadata.sol      |    0
 .../token/ERC20/extensions/draft-IERC20Permit.sol  |   60 ++
 .../contracts/token/ERC20/utils/SafeERC20.sol      |  116 +++
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/Context.sol                    |    0
 .../utils/introspection/ERC165Checker.sol          |    0
 .../contracts/utils/introspection/IERC165.sol      |    0
 .../contracts/utils/math/Math.sol                  |    0
 .../contracts/utils/math/SignedMath.sol            |    0
 .../contracts}/proxy/utils/Initializable.sol       |    0
 .../contracts}/utils/AddressUpgradeable.sol        |    0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |    0
 .../L1StandardBridge/implementation/meta.txt       |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../implementation/src/L1/L1StandardBridge.sol     |  321 ++++++
 .../implementation/src}/L1/ResourceMetering.sol    |  124 +--
 .../implementation/src/L1/SuperchainConfig.sol     |   94 ++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Encoding.sol      |  176 ++++
 .../implementation/src/libraries/Hashing.sol       |  124 +++
 .../implementation/src/libraries/Predeploys.sol    |  113 ++
 .../implementation/src/libraries/SafeCall.sol      |  142 +++
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/libraries/Types.sol         |   70 ++
 .../implementation/src/libraries/rlp/RLPWriter.sol |  163 +++
 .../src/universal/CrossDomainMessenger.sol         |  406 ++++++++
 .../src}/universal/IOptimismMintableERC20.sol      |   21 +-
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../src/universal/OptimismMintableERC20.sol        |  140 +++
 .../src/universal/StandardBridge.sol               |  489 +++++++++
 .../contracts/L1/L2OutputOracle.sol => /dev/null   |  350 -------
 .../contracts/libraries/Types.sol => /dev/null     |   84 --
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/math/Math.sol                  |    0
 .../contracts/utils/math/SignedMath.sol            |    0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |    0
 .../L2OutputOracle/implementation/meta.txt         |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../implementation/src/L1/L2OutputOracle.sol       |  317 ++++++
 .../implementation/src/L1/ResourceMetering.sol     |  162 +++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Types.sol         |   70 ++
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../@openzeppelin/contracts/access/Ownable.sol     |   68 ++
 .../@openzeppelin/contracts/utils/Context.sol      |   24 +
 .../libraries/resolver/Lib_AddressManager.sol      |   95 ++
 .../ethereum/.code/Lib_AddressManager/meta.txt     |    2 +
 .../OptimismMintableERC20.sol => /dev/null         |  149 ---
 .../OptimismMintableERC20Factory.sol => /dev/null  |  110 --
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/token/ERC20/ERC20.sol                |  383 +++++++
 .../contracts/token/ERC20/IERC20.sol               |   82 ++
 .../token/ERC20/extensions/IERC20Metadata.sol      |   28 +
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/Context.sol                    |   24 +
 .../contracts/utils/introspection/IERC165.sol      |    0
 .../implementation/meta.txt                        |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../src/universal/IOptimismMintableERC20.sol       |   31 +
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../src/universal/OptimismMintableERC20.sol        |  140 +++
 .../src/universal/OptimismMintableERC20Factory.sol |  132 +++
 .../contracts/L1/L2OutputOracle.sol => /dev/null   |  350 -------
 .../contracts/L1/OptimismPortal.sol => /dev/null   |  507 ---------
 .../contracts/L1/SystemConfig.sol => /dev/null     |  297 ------
 .../libraries/Arithmetic.sol => /dev/null          |   48 -
 .../contracts/libraries/Burn.sol => /dev/null      |   42 -
 .../contracts/libraries/Bytes.sol => /dev/null     |  142 ---
 .../contracts/libraries/Constants.sol => /dev/null |   49 -
 .../contracts/libraries/Encoding.sol => /dev/null  |  162 ---
 .../contracts/libraries/Hashing.sol => /dev/null   |  172 ----
 .../contracts/libraries/SafeCall.sol => /dev/null  |  160 ---
 .../contracts/libraries/Types.sol => /dev/null     |   84 --
 .../libraries/rlp/RLPWriter.sol => /dev/null       |  221 ----
 .../trie/SecureMerkleTrie.sol => /dev/null         |   64 --
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |    0
 .../contracts/utils/Address.sol                    |    0
 .../contracts/utils/math/Math.sol                  |    0
 .../contracts/utils/math/SignedMath.sol            |    0
 .../contracts}/access/OwnableUpgradeable.sol       |    0
 .../contracts}/proxy/utils/Initializable.sol       |    0
 .../contracts}/utils/AddressUpgradeable.sol        |    0
 .../contracts}/utils/ContextUpgradeable.sol        |    0
 .../lib}/solmate/src/utils/FixedPointMathLib.sol   |    0
 .../OptimismPortal/implementation/meta.txt         |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../implementation/src/L1/L2OutputOracle.sol       |  317 ++++++
 .../implementation/src/L1/OptimismPortal.sol       |  433 ++++++++
 .../implementation/src/L1/ResourceMetering.sol     |  162 +++
 .../implementation/src/L1/SuperchainConfig.sol     |   94 ++
 .../implementation/src/L1/SystemConfig.sol         |  367 +++++++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Bytes.sol         |  144 +++
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Encoding.sol      |  176 ++++
 .../implementation/src/libraries/Hashing.sol       |  124 +++
 .../implementation/src/libraries/SafeCall.sol      |  142 +++
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/libraries/Types.sol         |   70 ++
 .../src}/libraries/rlp/RLPReader.sol               |  249 ++---
 .../implementation/src/libraries/rlp/RLPWriter.sol |  163 +++
 .../src}/libraries/trie/MerkleTrie.sol             |  210 ++--
 .../src/libraries/trie/SecureMerkleTrie.sol        |   49 +
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../src}/vendor/AddressAliasHelper.sol             |    0
 .../implementation/contracts/GnosisSafe.sol        |  422 ++++++++
 .../implementation/contracts/base/Executor.sol     |   27 +
 .../contracts/base/FallbackManager.sol             |   53 +
 .../implementation/contracts/base/GuardManager.sol |   50 +
 .../contracts/base/ModuleManager.sol               |  133 +++
 .../implementation/contracts/base/OwnerManager.sol |  149 +++
 .../implementation/contracts/common/Enum.sol       |    8 +
 .../contracts/common/EtherPaymentFallback.sol      |   13 +
 .../contracts/common/SecuredTokenTransfer.sol      |   35 +
 .../contracts/common/SelfAuthorized.sol            |   16 +
 .../contracts/common/SignatureDecoder.sol          |   36 +
 .../implementation/contracts/common/Singleton.sol  |   11 +
 .../contracts/common/StorageAccessible.sol         |   47 +
 .../contracts/external/GnosisSafeMath.sol          |   54 +
 .../contracts/interfaces/ISignatureValidator.sol   |   20 +
 .../.code/ProxyAdminOwner/implementation/meta.txt  |    2 +
 .../ProxyAdminOwner/proxy/GnosisSafeProxy.sol      |  155 +++
 .../ethereum/.code/ProxyAdminOwner/proxy/meta.txt  |    2 +
 .../implementation/contracts/GnosisSafe.sol        |  422 ++++++++
 .../implementation/contracts/base/Executor.sol     |   27 +
 .../contracts/base/FallbackManager.sol             |   53 +
 .../implementation/contracts/base/GuardManager.sol |   50 +
 .../contracts/base/ModuleManager.sol               |  133 +++
 .../implementation/contracts/base/OwnerManager.sol |  149 +++
 .../implementation/contracts/common/Enum.sol       |    8 +
 .../contracts/common/EtherPaymentFallback.sol      |   13 +
 .../contracts/common/SecuredTokenTransfer.sol      |   35 +
 .../contracts/common/SelfAuthorized.sol            |   16 +
 .../contracts/common/SignatureDecoder.sol          |   36 +
 .../implementation/contracts/common/Singleton.sol  |   11 +
 .../contracts/common/StorageAccessible.sol         |   47 +
 .../contracts/external/GnosisSafeMath.sol          |   54 +
 .../contracts/interfaces/ISignatureValidator.sol   |   20 +
 .../implementation/meta.txt                        |    2 +
 .../proxy/GnosisSafeProxy.sol                      |  155 +++
 .../.code/SecurityCouncilMultisig/proxy/meta.txt   |    2 +
 .../contracts/proxy/utils/Initializable.sol        |  138 +++
 .../contracts/utils/Address.sol                    |  222 ++++
 .../.code/SuperchainConfig/implementation/meta.txt |    2 +
 .../implementation/src/L1/SuperchainConfig.sol     |   94 ++
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/universal/ISemver.sol       |   13 +
 .../contracts/proxy/utils/Initializable.sol        |  138 +++
 .../contracts/utils/Address.sol                    |  222 ++++
 .../contracts/utils/math/Math.sol                  |  226 ++++
 .../contracts/utils/math/SignedMath.sol            |   43 +
 .../lib/solmate/src/utils/FixedPointMathLib.sol    |  366 +++++++
 .../ethereum/.code/SuperchainConfig/proxy/meta.txt |    2 +
 .../proxy/src}/L1/ResourceMetering.sol             |  116 +--
 .../proxy/src/libraries/Arithmetic.sol             |   28 +
 .../SuperchainConfig/proxy/src/libraries/Burn.sol  |   32 +
 .../proxy/src/libraries/Constants.sol              |   46 +
 .../SuperchainConfig/proxy/src/universal/Proxy.sol |  168 +++
 .../contracts/legacy/AddressManager.sol            |   64 ++
 .../contracts/legacy/L1ChugSplashProxy.sol         |  289 ++++++
 .../contracts/universal/Proxy.sol                  |  217 ++++
 .../contracts/universal/ProxyAdmin.sol             |  254 +++++
 .../ethereum/.code/SuperchainProxyAdmin/meta.txt   |    2 +
 .../@openzeppelin/contracts/access/Ownable.sol     |   83 ++
 .../@openzeppelin/contracts/utils/Context.sol      |   24 +
 .../implementation/contracts/GnosisSafe.sol        |  422 ++++++++
 .../implementation/contracts/base/Executor.sol     |   27 +
 .../contracts/base/FallbackManager.sol             |   53 +
 .../implementation/contracts/base/GuardManager.sol |   50 +
 .../contracts/base/ModuleManager.sol               |  133 +++
 .../implementation/contracts/base/OwnerManager.sol |  149 +++
 .../implementation/contracts/common/Enum.sol       |    8 +
 .../contracts/common/EtherPaymentFallback.sol      |   13 +
 .../contracts/common/SecuredTokenTransfer.sol      |   35 +
 .../contracts/common/SelfAuthorized.sol            |   16 +
 .../contracts/common/SignatureDecoder.sol          |   36 +
 .../implementation/contracts/common/Singleton.sol  |   11 +
 .../contracts/common/StorageAccessible.sol         |   47 +
 .../contracts/external/GnosisSafeMath.sol          |   54 +
 .../contracts/interfaces/ISignatureValidator.sol   |   20 +
 .../implementation/meta.txt                        |    2 +
 .../proxy/GnosisSafeProxy.sol                      |  155 +++
 .../.code/SuperchainProxyAdminOwner/proxy/meta.txt |    2 +
 .../contracts/L1/ResourceMetering.sol => /dev/null |  186 ----
 .../contracts/L1/SystemConfig.sol => /dev/null     |  297 ------
 .../libraries/Arithmetic.sol => /dev/null          |   48 -
 .../contracts/libraries/Burn.sol => /dev/null      |   42 -
 .../contracts/universal/Semver.sol => /dev/null    |   58 --
 .../contracts/proxy/utils/Initializable.sol        |  138 +++
 .../contracts/utils/Address.sol                    |  222 ++++
 .../contracts/utils/math/Math.sol                  |  226 ++++
 .../contracts/utils/math/SignedMath.sol            |   43 +
 .../contracts}/access/OwnableUpgradeable.sol       |    0
 .../contracts}/proxy/utils/Initializable.sol       |    0
 .../contracts}/utils/AddressUpgradeable.sol        |    0
 .../contracts}/utils/ContextUpgradeable.sol        |    0
 .../lib/solmate/src/utils/FixedPointMathLib.sol    |  366 +++++++
 .../SystemConfig/implementation/meta.txt           |    2 +-
 .../contracts/utils/Strings.sol => /dev/null       |   75 --
 .../implementation/src/L1/ResourceMetering.sol     |  162 +++
 .../implementation/src/L1/SystemConfig.sol         |  367 +++++++
 .../implementation/src/libraries/Arithmetic.sol    |   28 +
 .../implementation/src/libraries/Burn.sol          |   32 +
 .../implementation/src/libraries/Constants.sol     |   46 +
 .../implementation/src/libraries/Storage.sol       |   88 ++
 .../implementation/src/universal/ISemver.sol       |   13 +
 377 files changed, 24544 insertions(+), 12878 deletions(-)
```

Generated with discovered.json: 0x8e8b7c912999391cfb5eb4ae8f11c842508f419d

# Diff at Thu, 28 Mar 2024 11:29:58 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@21187e63b9b90823a55c461c331868a470ce17eb block: 19439848
- current block number: 19532317

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19439848 (main branch discovery), not current.

```diff
    contract ZoraMultisig (0xC72aE5c7cc9a332699305E29F68Be66c73b60542) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 8 (25%)"
    }
```

```diff
    contract ChallengerMultisig (0xcA4571b1ecBeC86Ea2E660d242c1c29FcB55Dc72) {
    +++ description: None
      upgradeability.threshold:
+        "4 of 6 (67%)"
    }
```

Generated with discovered.json: 0x9b35815efb3ceb3b2c2040c529bff139eb5b685a

# Diff at Thu, 14 Mar 2024 07:34:32 GMT:

- author: Bartek Kiepuszewski (<bkiepuszewski@gmail.com>)
- comparing to: main@c79c75cb88d41e2f05e9cca5d501133eae405bbe block: 19412025
- current block number: 19431793

## Description

Blobs are switched on

## Watched changes

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
-        false
+        true
      values.overhead:
-        188
+        0
      values.scalar:
-        684000
+        "452312848583266388373324160190187140051835877600158453279133793016986207220"
    }
```

```diff
    contract ZoraMultisig (0xC72aE5c7cc9a332699305E29F68Be66c73b60542) {
    +++ description: None
      values.getOwners[7]:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.getOwners[6]:
+        "0x5553a23a71Bc7985c8E58Ca08072D2Fa9D1D1F4c"
      values.getOwners.5:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xD05e9Ab3B6A7F10ec1374bc352854ABA51643E81"
      values.getOwners.4:
-        "0x5553a23a71Bc7985c8E58Ca08072D2Fa9D1D1F4c"
+        "0xc08C1b8fD69A22a448fC014bEe4A700d70726dA7"
      values.getOwners.3:
-        "0xD05e9Ab3B6A7F10ec1374bc352854ABA51643E81"
+        "0xe7d71aea6FB8248d4fD4D5d5098D201674B531dB"
      values.getOwners.2:
-        "0xc08C1b8fD69A22a448fC014bEe4A700d70726dA7"
+        "0xf2989961Bf987bdD6c86CD6B845B6fACa194a8e4"
      values.getOwners.1:
-        "0xe7d71aea6FB8248d4fD4D5d5098D201674B531dB"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.getOwners.0:
-        "0xf2989961Bf987bdD6c86CD6B845B6fACa194a8e4"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.getThreshold:
-        4
+        2
    }
```

Generated with discovered.json: 0x44525c357a439c8e58fd7a9bc37a7dc22f0893d1

# Diff at Mon, 11 Mar 2024 13:04:18 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@64454506aee2b4b4e15b121f096369e92ec4cf20 block: 19176790
- current block number: 19412025

## Description

Update OP stack DA handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19176790 (main branch discovery), not current.

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
+        false
    }
```

Generated with discovered.json: 0x62696348b2db46516d37506a92f9f7c43734aaf1

# Diff at Wed, 07 Feb 2024 14:04:48 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@2e35800e01005d93332a552032058dcd67f3631d block: 19175194
- current block number: 19176790

## Description

Added opStackSequencerInbox handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19175194 (main branch discovery), not current.

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
      values.sequencerInbox:
+        "0x6F54Ca6F6EdE96662024Ffd61BFd18f3f4e34DFf"
    }
```

Generated with discovered.json: 0x258544e0ba1c6ca2c1c39595f9249531601ae6bf

# Diff at Wed, 07 Feb 2024 08:42:11 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@64f1e0f27f831d3ef860a1c2faad8c77e04e6c29 block: 19090324
- current block number: 19175194

## Description

Updated with the new OpDAHandler to remove the field.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19090324 (main branch discovery), not current.

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
      values.opStackDA.isAllTxsLengthEqualToCelestiaDAExample:
-        false
    }
```

Generated with discovered.json: 0x3fa7567e1997dc0a9d4c893f92a793efbed0dd70

# Diff at Fri, 26 Jan 2024 10:57:02 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@bb037f7100968a00265a4787338e51ca81aafe9b block: 18218892
- current block number: 19090324

## Description

Added opStackDa handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 18218892 (main branch discovery), not current.

```diff
    contract SystemConfig (0xA3cAB0126d5F504B071b81a3e8A2BBBF17930d86) {
      values.opStackDA:
+        {"isAllTxsLengthEqualToCelestiaDAExample":false,"isSomeTxsLengthEqualToCelestiaDAExample":false}
    }
```

Generated with discovered.json: 0xc4da1c7eb9cf28e329c3fe57238e3bb84a640431

# Diff at Tue, 26 Sep 2023 08:54:55 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@cfd4e281f2af40c7c69302b16c1308c0c5651be0

## Watched changes

```diff
    contract L2OutputOracle (0x9E6204F750cD866b299594e2aC9eA824E2e5f95c) {
      values.deletedOutputs:
+        []
    }
```
