Generated with discovered.json: 0xd0c7f2c911c60be8d297499da7cd55c0e393e1bf

# Diff at Thu, 01 Aug 2024 08:54:19 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@295430f331b68784c13ccda9222bc78df1e833c5 block: 20032836
- current block number: 20432632

## Description

Two signers are added to frxETHMultisig. 
One minter is removed from frxETH, leaving frxETHMinter as the only minter. A new owner is nominated for frxETH (would transfer the ownership from frxETHMultisig to a timelock)

## Watched changes

```diff
    contract frxETH (0x5E8422345238F34275888049021821E8E08CAa1f) {
    +++ description: None
      values.minters_array.1:
-        "0x8306300ffd616049FD7e4b0354a64Da835c1A81C"
+        "0x0000000000000000000000000000000000000000"
      values.nominatedOwner:
-        "0x0000000000000000000000000000000000000000"
+        "0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA"
    }
```

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: None
      values.$multisigThreshold:
-        "3 of 5 (60%)"
+        "4 of 7 (57%)"
      values.getOwners.6:
+        "0x6e74053a3798e0fC9a9775F7995316b27f21c4D2"
      values.getOwners.5:
+        "0x8da4E997e051605878c9C0B793c496556EACC2C0"
      values.getOwners.4:
-        "0x6e74053a3798e0fC9a9775F7995316b27f21c4D2"
+        "0x6933BCC3e96f1C4d2cb73Cb391d854b18Ab7A4F2"
      values.getOwners.3:
-        "0x8da4E997e051605878c9C0B793c496556EACC2C0"
+        "0xc28339c70054bC22255A74E927a0B9e9A475F224"
      values.getOwners.2:
-        "0x6933BCC3e96f1C4d2cb73Cb391d854b18Ab7A4F2"
+        "0xcbc616D595D38483e6AdC45C7E426f44bF230928"
      values.getOwners.1:
-        "0xc28339c70054bC22255A74E927a0B9e9A475F224"
+        "0xc8dE9f45601DA8C76158b8CAF3E56E8A037F2228"
      values.getOwners.0:
-        "0xcbc616D595D38483e6AdC45C7E426f44bF230928"
+        "0x381e2495e683868F693AA5B1414F712f21d34b40"
      values.getThreshold:
-        3
+        4
    }
```

Generated with discovered.json: 0x14e4842c3a4c9f8badeee84a257038d6be144f50

# Diff at Tue, 30 Jul 2024 11:11:49 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20032836
- current block number: 20032836

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20032836 (main branch discovery), not current.

```diff
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.
      fieldMeta:
+        {"getOwners":{"severity":"LOW","description":"Signers of the multisig, high severity if threshold changes"},"getThreshold":{"severity":"HIGH","description":"Multisig threshold"}}
    }
```

Generated with discovered.json: 0x6002e87a118db1246bf48b3a23039cc57a2034cb

# Diff at Thu, 18 Jul 2024 10:30:54 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 20032836
- current block number: 20032836

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20032836 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x126bcc31Bc076B3d515f60FBC81FddE0B0d542Ed) {
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
    contract ProxyAdmin (0x13Fe62cB24aEa5afd179F20D362c056c3881ABcA) {
    +++ description: None
      descriptions:
+        ["It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component."]
    }
```

```diff
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions.0:
-        "Contains configuration parameters such as the Sequencer address, the L2 gas limit and the unsafe block signer address."
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract L1StandardBridge (0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2) {
    +++ description: None
      template:
+        "opstack/L1StandardBridge"
      descriptions:
+        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
    }
```

```diff
    contract SuperchainConfig (0x61ca43CB037aC9181d8Fa5CD0073dC314065Ccc4) {
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
    contract L2OutputOracle (0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4) {
    +++ description: None
      template:
+        "opstack/L2OutputOracle"
      descriptions:
+        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
    }
```

```diff
    contract L1ERC721Bridge (0xa9B5Fb84B7aeAF0D51C95DB04a76B1D4738D0eC5) {
    +++ description: None
      template:
+        "opstack/L1ERC721Bridge"
      descriptions:
+        ["Used to bridge ERC-721 tokens from host chain to this chain."]
    }
```

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
      descriptions:
+        ["It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."]
      roles:
+        ["Guardian"]
    }
```

Generated with discovered.json: 0xf2c582e2f7128402eccf6eb72a839212520d0b9e

# Diff at Thu, 06 Jun 2024 12:39:01 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@5302ef2899ddfb7175df497ceaa47fba4e383655 block: 19982475
- current block number: 20032836

## Description

Discovery output now includes names of templates used for contract analysis.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19982475 (main branch discovery), not current.

```diff
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2) {
    +++ description: Contains configuration parameters such as the Sequencer address, the L2 gas limit and the unsafe block signer address.
      template:
+        "opstack/SystemConfig"
    }
```

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract TimelockMultisig (0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
      template:
+        "GnosisSafe"
    }
```

Generated with discovered.json: 0xf0c97ee110e8ec5c671f43cd04bf06c74a0ebd67

# Diff at Thu, 30 May 2024 11:50:41 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@3fadb11e3d19143a19dce8628dd550d0213d6c9b block: 19875788
- current block number: 19982475

## Description

One signer of fraxtal Multisig is replaced and L2 fee calculation is switched to [post-Ecotone encoding](https://specs.optimism.io/protocol/system_config.html#ecotone-scalar-overhead-uint256uint256-change).

## Watched changes

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
+++ description: Signers of the multisig, high severity if threshold changes
+++ type: PERMISSION
+++ severity: LOW
      values.getOwners.0:
-        "0x892D3076fb9Ac7Cb2B9cF25F051A275E69D460e3"
+        "0x8da4E997e051605878c9C0B793c496556EACC2C0"
    }
```

Generated with discovered.json: 0xb4e392b5d9341f4a7fce949f64679f35dd02550b

# Diff at Wed, 15 May 2024 13:50:16 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@2a68252776877f0b82e9f7cf6261b744952be771 block: 19859844
- current block number: 19875788

## Description

### Immutables now variable

This upgrade is touching all major contracts of the rollup system, with only minor changes to immutables, identical to the [Optimism Upgrade Proposal #6: Multi-Chain Prep (MCP) L1](https://gov.optimism.io/t/upgrade-proposal-6-multi-chain-prep-mcp-l1/7677)

The new implementations are code-identical to the optimism upgrade on which comments can be found in optimisms diffHistory.md under 'Diff at Fri, 12 Apr 2024 12:08:01 GMT'. Only exception is the customized OptimismPortal (FraxchainPortal) by Fraxtal. But that one has again the optimism changes, just merged.

## Watched changes

```diff
    contract L1CrossDomainMessenger (0x126bcc31Bc076B3d515f60FBC81FddE0B0d542Ed) {
    +++ description: None
      upgradeability.implementation:
-        "0x31c25985E6b10CF335FC01cf9790aF4890d0505c"
+        "0xC6e4ECE5576dC96846bb11eD8910f3dF3CE516b8"
      implementations.0:
-        "0x31c25985E6b10CF335FC01cf9790aF4890d0505c"
+        "0xC6e4ECE5576dC96846bb11eD8910f3dF3CE516b8"
      values.version:
-        "2.2.0"
+        "2.3.0"
      values.otherMessenger:
+        "0x4200000000000000000000000000000000000007"
    }
```

```diff
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2) {
    +++ description: None
      upgradeability.implementation:
-        "0x22052c592f763CA14a090D9974c5Bf9Fd3a44b8c"
+        "0x4D7A1a16d0DA89B50FBd8b524508FC393A6Dc367"
      implementations.0:
-        "0x22052c592f763CA14a090D9974c5Bf9Fd3a44b8c"
+        "0x4D7A1a16d0DA89B50FBd8b524508FC393A6Dc367"
      values.version:
-        "1.11.0"
+        "1.12.0"
      values.BATCH_INBOX_SLOT:
+        "0x71ac12829d66ee73d8d95bff50b3589745ce57edae70a3fb111a2342464dc597"
      values.batchInbox:
+        "0xfF000000000000000000000000000000000420fC"
      values.L1_CROSS_DOMAIN_MESSENGER_SLOT:
+        "0x383f291819e6d54073bc9a648251d97421076bdd101933c0c022219ce9580636"
      values.L1_ERC_721_BRIDGE_SLOT:
+        "0x46adcbebc6be8ce551740c29c47c8798210f23f7f4086c41752944352568d5a7"
      values.L1_STANDARD_BRIDGE_SLOT:
+        "0x9904ba90dde5696cda05c9e0dab5cbaa0fea005ace4d11218a02ac668dad6376"
      values.l1CrossDomainMessenger:
+        "0x126bcc31Bc076B3d515f60FBC81FddE0B0d542Ed"
      values.l1ERC721Bridge:
+        "0xa9B5Fb84B7aeAF0D51C95DB04a76B1D4738D0eC5"
      values.l1StandardBridge:
+        "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2"
      values.L2_OUTPUT_ORACLE_SLOT:
+        "0xe52a667f71ec761b9b381c7b76ca9b852adf7e8905da0e0ad49986a0a6871815"
      values.l2OutputOracle:
+        "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4"
      values.OPTIMISM_MINTABLE_ERC20_FACTORY_SLOT:
+        "0xa04c5bb938ca6fc46d95553abf0a76345ce3e722a30bf4f74928b8e7d852320c"
      values.OPTIMISM_PORTAL_SLOT:
+        "0x4b6c74f9e688cb39801f2112c14a8c57232a3fc5202e1444126d4bce86eb19ac"
      values.optimismMintableERC20Factory:
+        "0x11FE3be54aC01C13Dd985cE2BdD10eD77e1376cc"
      values.optimismPortal:
+        "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D"
      values.START_BLOCK_SLOT:
+        "0xa11ee3ab75b40e88a0105e935d17cd36c8faee0138320d776c411291bdbbb19f"
      values.startBlock:
+        19135324
    }
```

```diff
    contract L1StandardBridge (0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2) {
    +++ description: None
      upgradeability.implementation:
-        "0xCC26248B71284B812Ff7825e005560DB01a874C7"
+        "0x30Cd695249394eED44C576f2caEC5304be6455F9"
      implementations.0:
-        "0xCC26248B71284B812Ff7825e005560DB01a874C7"
+        "0x30Cd695249394eED44C576f2caEC5304be6455F9"
      values.version:
-        "2.0.0"
+        "2.1.0"
    }
```

```diff
    contract OptimismPortal (0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D) {
    +++ description: None
      upgradeability.implementation:
-        "0x59B6903044Fa9439a5D621D3605789A6E654b1D6"
+        "0x47Ec03B67ba4f3C71a4320D2947f2173E0B45a23"
      implementations.0:
-        "0x59B6903044Fa9439a5D621D3605789A6E654b1D6"
+        "0x47Ec03B67ba4f3C71a4320D2947f2173E0B45a23"
      values.version:
-        "2.4.0"
+        "2.5.0"
    }
```

```diff
    contract L2OutputOracle (0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4) {
    +++ description: None
      upgradeability.implementation:
-        "0x84c2f365733c6560bd49D8768d9c23B07A9DD630"
+        "0x6f3CcC8C9DAf8B9b39aDe481213Ff7A626a42B65"
      implementations.0:
-        "0x84c2f365733c6560bd49D8768d9c23B07A9DD630"
+        "0x6f3CcC8C9DAf8B9b39aDe481213Ff7A626a42B65"
      values.version:
-        "1.7.0"
+        "1.8.0"
    }
```

```diff
    contract L1ERC721Bridge (0xa9B5Fb84B7aeAF0D51C95DB04a76B1D4738D0eC5) {
    +++ description: None
      upgradeability.implementation:
-        "0x23A0478996241F9f966b7054c06FdeB96Ddf3475"
+        "0x7eE1637C33Ed0DFEE6403f3301B6d404106018e4"
      implementations.0:
-        "0x23A0478996241F9f966b7054c06FdeB96Ddf3475"
+        "0x7eE1637C33Ed0DFEE6403f3301B6d404106018e4"
      values.version:
-        "2.0.0"
+        "2.1.0"
    }
```

## Source code changes

```diff
.../L1CrossDomainMessenger.sol                     | 201 +++++++++++++++----
 .../L1ERC721Bridge/L1ERC721Bridge.sol              | 190 ++++++++++++++----
 .../L1StandardBridge/L1StandardBridge.sol          | 213 ++++++++++++++++-----
 .../L2OutputOracle/L2OutputOracle.sol              | 151 ++++++++-------
 .../OptimismPortal/FraxchainPortal.sol             |  95 +++++----
 .../SystemConfig/SystemConfig.sol                  | 166 +++++++++++++---
 6 files changed, 769 insertions(+), 247 deletions(-)
```

Generated with discovered.json: 0x1be769dd7c57d040bbbab89bd20d2c7b751d5419

# Diff at Mon, 13 May 2024 08:17:32 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@142cacbaef1c026127ab0d88f45c576741b3a345 block: 19573574
- current block number: 19859844

## Description

One signer of the frxETH Multisig is changed.

## Watched changes

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: This address is the owner of the gas token contract frxETH, and the frxETHMinter contract. It can pause and unpause ETH deposits, and change how much ETH is withheld from each submit() transaction.
      values.getOwners.3:
-        "0xc8dE9f45601DA8C76158b8CAF3E56E8A037F2228"
+        "0x8da4E997e051605878c9C0B793c496556EACC2C0"
    }
```

Generated with discovered.json: 0x8b040a76aba80d05b354d6a3599890e6aefd6263

# Diff at Wed, 03 Apr 2024 06:51:43 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@b58073d6e00a407c2aba3b43af1c68de0726a85a block: 19532850
- current block number: 19573574

## Description

One signer of frxETH Multisig is changed.

## Watched changes

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: This address is the owner of the gas token contract frxETH, and the frxETHMinter contract. It can pause and unpause ETH deposits, and change how much ETH is withheld from each submit() transaction.
      values.getOwners.3:
-        "0x05FB8eC3C41da95b26fCb85503DaF8B89B89A935"
+        "0xc8dE9f45601DA8C76158b8CAF3E56E8A037F2228"
    }
```

Generated with discovered.json: 0xf2ca2b1fecb97feb06e36aecc6f50407d20055c1

# Diff at Thu, 28 Mar 2024 13:17:41 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@d6dd20a306b268b851f83df5487b048c1253bb51 block: 19531830
- current block number: 19532850

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531830 (main branch discovery), not current.

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 5 (60%)"
    }
```

```diff
    contract TimelockMultisig (0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 5 (60%)"
    }
```

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 5 (60%)"
    }
```

Generated with discovered.json: 0x0f8dee218ea3b0b3545bdbcadcdc249d145a3a03

# Diff at Fri, 15 Mar 2024 10:25:21 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@6a294996c13c1a3ad00c7c4d72e651e8fbd4fa1c block: 19412037
- current block number: 19439733

## Description

One signer in the multisig is changed.

## Watched changes

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
+++ description: Signers of the multisig, high severity if threshold changes
+++ type: PERMISSION
+++ severity: LOW
      values.getOwners.4:
-        "0xf4E1d185666a624099298FcC42C50ba662DC7e52"
+        "0xcbc616D595D38483e6AdC45C7E426f44bF230928"
    }
```

Generated with discovered.json: 0xc7d883541dcc997f1ca9944846e1b7ddd7675f47

# Diff at Mon, 11 Mar 2024 13:05:47 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@64454506aee2b4b4e15b121f096369e92ec4cf20 block: 19384276
- current block number: 19412037

## Description

Update discovery to include the multisig threshold.

## Watched changes

```diff
    contract frxETHMinter (0xbAFA44EFE7901E04E39Dad13167D089C559c1138) {
    +++ description: None
      values.withholdRatio:
-        920000
+        980000
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19384276 (main branch discovery), not current.

```diff
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
+        false
    }
```

Generated with discovered.json: 0xc776573184b74c22a61dc03318859dd4c0928cea

# Diff at Thu, 07 Mar 2024 15:46:08 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@b0c42602239073a6821d73af2ad55522306d8622 block: 19374912
- current block number: 19384276

## Description

Ignored nonces, totalSupply and deposit count/root methods.

## Watched changes

```diff
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C) {
    +++ description: None
      values.getOwners.0:
-        "0xf4E1d185666a624099298FcC42C50ba662DC7e52"
+        "0xcbc616D595D38483e6AdC45C7E426f44bF230928"
    }
```

```diff
    contract TimelockMultisig (0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27) {
    +++ description: None
      values.getOwners.1:
-        "0xf4E1d185666a624099298FcC42C50ba662DC7e52"
+        "0xcbc616D595D38483e6AdC45C7E426f44bF230928"
    }
```

```diff
    contract frxETHMinter (0xbAFA44EFE7901E04E39Dad13167D089C559c1138) {
    +++ description: None
      values.numValidators:
-        212
+        211
    }
```

```diff
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508) {
    +++ description: None
      values.getOwners[5]:
-        "0xE7c147CD1A7c05a6e73217645547582024E87a9B"
    }
```

Generated with discovered.json: 0xa0e7c3cc5c7b0345b997f268444feac8ada39a1b

# Diff at Wed, 06 Mar 2024 08:24:18 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- current block number: 19374912

## Description

Update discovery to include the multisig threshold.

## Initial discovery

```diff
+   Status: CREATED
    contract DepositContract (0x00000000219ab540356cBB839Cbe05303d7705Fa)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MintableERC20FactoryProxy (0x11FE3be54aC01C13Dd985cE2BdD10eD77e1376cc)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x126bcc31Bc076B3d515f60FBC81FddE0B0d542Ed)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x13Fe62cB24aEa5afd179F20D362c056c3881ABcA)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SystemConfig (0x34a9f273cbD847d49c3De015FC26c3E66825f8b2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract frxETH (0x5E8422345238F34275888049021821E8E08CAa1f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x61ca43CB037aC9181d8Fa5CD0073dC314065Ccc4)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4)
    +++ description: None
```

```diff
+   Status: CREATED
    contract frxETHMultisig (0x8306300ffd616049FD7e4b0354a64Da835c1A81C)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Timelock (0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AddressManager (0x8c5D64d10394cFa070066e70Ec19E67398b4dABE)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0xa9B5Fb84B7aeAF0D51C95DB04a76B1D4738D0eC5)
    +++ description: None
```

```diff
+   Status: CREATED
    contract sfrxETH (0xac3E018457B222d93114458476f3E3416Abbe38F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TimelockMultisig (0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27)
    +++ description: None
```

```diff
+   Status: CREATED
    contract frxETHMinter (0xbAFA44EFE7901E04E39Dad13167D089C559c1138)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FraxtalMultisig (0xe0d7755252873c4eF5788f7f45764E0e17610508)
    +++ description: None
```
