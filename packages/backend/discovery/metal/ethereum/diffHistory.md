Generated with discovered.json: 0x199be30271bcf1d7a24543f3499a53336e5857d9

# Diff at Tue, 30 Jul 2024 11:12:45 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20211468
- current block number: 20211468

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20211468 (main branch discovery), not current.

```diff
    contract SystemConfig (0x7BD909970B0EEdcF078De6Aeff23ce571663b8aA) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

Generated with discovered.json: 0xc077a0f745782d216f312414167ad14d22631217

# Diff at Thu, 18 Jul 2024 10:31:54 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 20211468
- current block number: 20211468

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20211468 (main branch discovery), not current.

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
      roles:
+        ["Guardian"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x0a47A44f1B2bb753474f8c830322554A96C9934D) {
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
    contract OptimismMintableERC20Factory (0x1aaab4E20d2e4Bb992b5BCA2125e8bd3588c8730) {
    +++ description: None
      template:
+        "opstack/OptimismMintableERC20Factory"
      descriptions:
+        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
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
    contract ProxyAdmin (0x37Ff0ae34dadA1A95A4251d10ef7Caa868c7AC99) {
    +++ description: None
      descriptions:
+        ["It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component."]
    }
```

```diff
    contract L2OutputOracle (0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426) {
    +++ description: None
      template:
+        "opstack/L2OutputOracle"
      descriptions:
+        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
    }
```

```diff
    contract OptimismPortal (0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956) {
    +++ description: None
      template:
+        "opstack/OptimismPortal"
      descriptions:
+        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      descriptions:
+        ["It can act on behalf of 0x37Ff0ae34dadA1A95A4251d10ef7Caa868c7AC99, inheriting its permissions."]
    }
```

```diff
    contract L1ERC721Bridge (0x50D700e97967F9115e3f999bDB263d69F6704680) {
    +++ description: None
      template:
+        "opstack/L1ERC721Bridge"
      descriptions:
+        ["Used to bridge ERC-721 tokens from host chain to this chain."]
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
    contract L1StandardBridge (0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3) {
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
    contract SystemConfig (0x7BD909970B0EEdcF078De6Aeff23ce571663b8aA) {
    +++ description: None
      template:
+        "opstack/SystemConfig"
      descriptions:
+        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
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
    contract FoundationMultisig_2 (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      descriptions:
+        ["Deputy Guardian of 0x5dC91D01290af474CE21DE14c17335a6dEe4d2a8. It can act on behalf of the 0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2."]
    }
```

Generated with discovered.json: 0x8ac7122549441d15e2f7c93a7e6c36129570212d

# Diff at Fri, 28 Jun 2024 07:30:12 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@555efdd96fadc389c2c70beacf820125fbb25a7d block: 20073647
- current block number: 20188697

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

Generated with discovered.json: 0x8e61c63a5c06891e4e1ca96a1aab8b6950378f96

# Diff at Wed, 12 Jun 2024 05:26:19 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@09246cd19afe46cf207c325923fef8f51d581735 block: 19927710
- current block number: 20073647

## Description

Changes due to Superchain permissions upgrade: 
- Security Council MS threshold raised
- Liveness and DeputyGuardian modules added
- Guardian (proxy)MS added

## Watched changes

```diff
    contract OptimismPortal (0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956) {
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
.../metal/ethereum/.flat/DeputyGuardianModule.sol  | 139 +++
 .../ethereum/.flat/GuardianMultisig/GnosisSafe.sol | 952 +++++++++++++++++++++
 .../.flat/GuardianMultisig/GnosisSafeProxy.p.sol   |  34 +
 .../metal/ethereum/.flat/LivenessGuard.sol         | 581 +++++++++++++
 .../metal/ethereum/.flat/LivenessModule.sol        | 257 ++++++
 5 files changed, 1963 insertions(+)
```

Generated with discovered.json: 0x8dec339792c43552cd08684a21063ee4be3d8342

# Diff at Wed, 22 May 2024 20:09:29 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@bac4efad06804152ae97853892e122a801bbc509 block: 19918744
- current block number: 19927710

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

Generated with discovered.json: 0x945f32bd03147da666809aa29cce279673ba1992

# Diff at Tue, 21 May 2024 14:01:54 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@c032520e456d0e6bee8b65e420ff7dba9f36bd48 block: 19781431
- current block number: 19918744

## Description

Name change.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19781431 (main branch discovery), not current.

```diff
    contract MetalMultisig (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64) {
    +++ description: None
      name:
-        "MetalMultisig"
+        "GnosisSafe"
    }
```

```diff
    contract ProxyAdminOwner (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      name:
-        "ProxyAdminOwner"
+        "ConduitMultisig"
    }
```

Generated with discovered.json: 0x9bd81dfc1056a71d240cdbab98badebd5ecd7362

# Diff at Wed, 24 Apr 2024 05:49:16 GMT:

- author: sekuba (<sekuba@users.noreply.githum.com>)
- current block number: 19723257

## Description

Initial discovery: Normal OP stack rollup with superchain config.

## Initial discovery

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x0a47A44f1B2bb753474f8c830322554A96C9934D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x1aaab4E20d2e4Bb992b5BCA2125e8bd3588c8730)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x37Ff0ae34dadA1A95A4251d10ef7Caa868c7AC99)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MetalMultisig (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdminOwner (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x50D700e97967F9115e3f999bDB263d69F6704680)
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
    contract L1StandardBridge (0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SystemConfig (0x7BD909970B0EEdcF078De6Aeff23ce571663b8aA)
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
    contract AddressManager (0xd4b1EC0DEc3C7F12abD3ec27B7514880ae1C3a37)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Lib_AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F)
    +++ description: None
```
