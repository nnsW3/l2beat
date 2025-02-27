Generated with discovered.json: 0x3c024b87baed4c457cb832b6529c8aeaaab5fc41

# Diff at Tue, 30 Jul 2024 15:56:41 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@51c652e40232eac8e60e9b31aa56f09071495fef block: 20389507
- current block number: 20420404

## Description

Upgraded implementation. (unverified contract)

## Watched changes

```diff
    contract Vault6 (0x763A0CA93AF05adE98A52dc1E5B936b89bF8b89a) {
    +++ description: None
      values.$implementation:
-        "0x5D9A457ce3F6ab74B7854DA7Cdc8ac5cc5bbb16C"
+        "0x118cbd7a4769846AD4928598D1f805a509Cc8c0d"
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20389507 (main branch discovery), not current.

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
      fieldMeta:
+        {"proposalCount":{"severity":"MEDIUM","description":"The amount of proposals ever created. Goes up by 1 for each proposal."}}
    }
```

Generated with discovered.json: 0xd4edabd36b47d6d04eb8b764f4fba365729e4e7a

# Diff at Fri, 26 Jul 2024 08:24:04 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@f98f9bf0ba32e20ec33942af664ae6ed27e8172d block: 20181708
- current block number: 20389507

## Description

Two scheduled transactions (the first is already executed):
1) unpause bridges
2) deploy 'LiquidityManager' ([unverified contract](https://etherscan.io/address/0xca9a74c22f0a2eb91909d59a98f48f9357499a46))

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        55
+        57
    }
```

Generated with discovered.json: 0x4fd047f7a3a415b0bb239baf3fb1480e28513eba

# Diff at Thu, 27 Jun 2024 08:04:02 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@fa87256215827e86de3c150df238331f18654881 block: 20175233
- current block number: 20181708

## Description

Proposed and executed a proposal to unfreeze bridges, Vault6 and unverified 0xD02c8a355599FEe7e4F1d1d71f7A01c0108E353c.

Vault6 implementation is unverified, currently no visibility on what was frozen.

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        54
+        55
    }
```

Generated with discovered.json: 0xb8c06d6916518287da115de7a043ff208ec8a78a

# Diff at Wed, 26 Jun 2024 10:22:05 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cb9200e010745e10244c0b3851b3acf21fe41f31 block: 20138458
- current block number: 20175233

## Description

Proposal from last update is executed, upgrading the Vault6 contract to a new unverified implementation.

## Watched changes

```diff
    contract Vault6 (0x763A0CA93AF05adE98A52dc1E5B936b89bF8b89a) {
    +++ description: None
      upgradeability.implementation:
-        "0x2861F4FCADEB5Be5cA47D306D139ec97439FC35C"
+        "0x5D9A457ce3F6ab74B7854DA7Cdc8ac5cc5bbb16C"
      implementations.0:
-        "0x2861F4FCADEB5Be5cA47D306D139ec97439FC35C"
+        "0x5D9A457ce3F6ab74B7854DA7Cdc8ac5cc5bbb16C"
    }
```

Generated with discovered.json: 0xf976fdfd826637b5822d6ad01aaca6c3ef60d265

# Diff at Fri, 21 Jun 2024 06:59:57 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@1ba6434de248c46d9e6b140264866a3072082af4 block: 20016116
- current block number: 20138458

## Description

New proposal: Withdraw fees from Vault 6, upgrade other unverified contracts to new unverified contracts.

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        53
+        54
    }
```

Generated with discovered.json: 0x9e9cf8137ae4685c73b20e751b457741f4598a42

# Diff at Tue, 04 Jun 2024 04:37:25 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@706706295a49487100a144276621ec14caf86806 block: 19531518
- current block number: 20016116

## Description

A new proposal is made in the goveernance contract which has the description 'Unfreeze bridges' and targets a Chainport Vault (`0x763a0ca93af05ade98a52dc1e5b936b89bf8b89a`) of which the source code is unverified.

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        52
+        53
    }
```

Generated with discovered.json: 0x4e1a299c85d757fb2b972b98daae67841056a93f

# Diff at Thu, 28 Mar 2024 08:48:24 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@867de6120241d47b66bf76f83c490408eb3595b0 block: 19467300
- current block number: 19531518

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19467300 (main branch discovery), not current.

```diff
    contract MultisigVault2 (0x450aD18B4442ce2972Af2a7A12439984db4Afaf9) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 3 (67%)"
    }
```

```diff
    contract MultisigVault1 (0x7B8FDfCf79E72a9a8e656958647D139C0e16EA19) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 3 (67%)"
    }
```

Generated with discovered.json: 0x8db723b5dec0e6a44d1881afc2458d6f3fd6aebf

# Diff at Tue, 19 Mar 2024 07:26:39 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@87a9df6317bf41ef2d063033dfc77d54521b9991 block: 19440568
- current block number: 19467300

## Description

A proposal was submitted and is executed. The execution emitted the Unpaused event from two unverified contracts (0xe452aB0cA5cCBeDd7A27E66C82644Cad747bb976 and 0x442bE00c47C7B1d3A972D179dc696DEd006862b8) and was externally titled: 'Unfreeze SwapClone + StableBridgeCore'

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        51
+        52
    }
```

Generated with discovered.json: 0x6c4694a51a3ccf3920314d28aac8d48e9e63e622

# Diff at Fri, 15 Mar 2024 13:13:16 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@e2d7fd753a5234b8cba1b13f16353dfafe85c087 block: 19389379
- current block number: 19440568

## Description

A proposal is submitted which would change the FeeCollector, AdminFeeCollector and add a Maintainer (There are currently 6 Maintainers registered, they can at least freeze the bridges). The new maintainer has the address 0xc051b171464D77bdF47f08bC7606630F17aB0753.

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        50
+        51
    }
```

Generated with discovered.json: 0x86f5a697e88e62dc3e2832bb21f5115cd2bec5e2

# Diff at Fri, 08 Mar 2024 08:53:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a10be30b5303dc6a457478efdaca424c246501ca block: 19375580
- current block number: 19389379

## Description

New proposal created and executed with the description "Change Arbitrage Settings on Main and Side Bridges".
It called `setArbitrageManagerAndLimit()` but we can't see what this is doing because the targets have unverified sources.

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
+++ description: The amount of proposals ever created. Goes up by 1 for each proposal.
+++ severity: MEDIUM
      values.proposalCount:
-        49
+        50
    }
```

Generated with discovered.json: 0x5fa08b3a2322e373062b7d84998ac427346b7e7b

# Diff at Wed, 06 Mar 2024 10:38:21 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@724fc93d9bd160395a856b93ce5016ca876c6436 block: 19118389
- current block number: 19375580

## Description

New proposal created and executed with the description "Unfreeze bridges".

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    +++ description: None
      values.proposalCount:
-        48
+        49
    }
```

Generated with discovered.json: 0x860ce22e6e5ca8d7087c013b808735c88781475f

# Diff at Tue, 30 Jan 2024 09:20:32 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8166c01da21cd9a7fadf2664669d7d2675512e02 block: 19062209
- current block number: 19118389

## Description

New proposal created with the description "Add 4 new maintainers".
The new maintainers are:

- 0x6d26b9efb640bf40cca1fb70b00b0fcec732ce00
- 0x097bdc9e913539b6aa0a79389ccc084b9502846a
- 0xa829446eec801483b32f5d5486374672aad7e028
- 0xdcc781ebeb5b6aa4648703202a34c46959302ed6

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
      values.proposalCount:
-        47
+        48
    }
```

Generated with discovered.json: 0x972c0ec8ccdd85cd61bd3520dbb2f78b1cab4165

# Diff at Mon, 22 Jan 2024 12:14:45 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@7755f153438c1f16773ba6733cfa3a8c8bc0a394 block: 18932447
- current block number: 19062209

## Description

Executed two proposalas 46 and 47.
The first one according to the description submitted by the Chainport Congress aims to: "Deploy Arbitrage, Upgrade Main and Side Bridge and add new Maintainer".
While the second one wants to: "Refund HODL tokens".

In the process the implementation of the Vault changed, since this contract is unverfied it's impossible to analyze what has really happened.

## Watched changes

```diff
    contract Vault6 (0x763A0CA93AF05adE98A52dc1E5B936b89bF8b89a) {
      upgradeability.implementation:
-        "0x4899eB3c7db4c3b31Ee412fBcf2cfbA60Ca5C568"
+        "0x2861F4FCADEB5Be5cA47D306D139ec97439FC35C"
      implementations.0:
-        "0x4899eB3c7db4c3b31Ee412fBcf2cfbA60Ca5C568"
+        "0x2861F4FCADEB5Be5cA47D306D139ec97439FC35C"
    }
```

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
      values.proposalCount:
-        45
+        47
    }
```

## Source code changes

```diff
.../ethereum/{.code@18932447 => .code}/Vault6/implementation/meta.txt   | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

# Diff at Thu, 04 Jan 2024 07:22:14 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@45fa22227d0d99394ce6d0a25e40e8ceeca18cb3

## Description

New proposal was created and executed. It changes the fee collector address (to 0xdb07241c48eAd8b973A76B0bEb60a21F09BEC5e4) for the main Vault contract and a side contract (source code not available).

## Watched changes

```diff
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
      values.proposalCount:
-        44
+        45
    }
```

# Diff at Fri, 06 Oct 2023 09:11:10 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@

## Description

Multisig bridge. Don't want to spend too much time on it.

## Watched changes

```diff
+   Status: CREATED
    contract ChainportCongressMembersRegistry (0x1DeE7Be5415F6Fdcc8515cA06AE8d9aFb550aBCa) {
    }
```

```diff
+   Status: CREATED
    contract MultisigVault2 (0x450aD18B4442ce2972Af2a7A12439984db4Afaf9) {
    }
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x63D572d781eD8D18d823462aa2a4D51d7Ac4F29F) {
    }
```

```diff
+   Status: CREATED
    contract Vault6 (0x763A0CA93AF05adE98A52dc1E5B936b89bF8b89a) {
    }
```

```diff
+   Status: CREATED
    contract MultisigVault1 (0x7B8FDfCf79E72a9a8e656958647D139C0e16EA19) {
    }
```

```diff
+   Status: CREATED
    contract ChainportCongress (0xB6b4C7aC240b1f176c5589d064733066a83884a1) {
    }
```
