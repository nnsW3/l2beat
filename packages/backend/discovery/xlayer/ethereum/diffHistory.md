Generated with discovered.json: 0x1b09cde9ac50176d9fc89600655a3b677eb15944

# Diff at Wed, 17 Jul 2024 08:35:19 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0df6fda263b58edb9acce032017abb5ebd61f5fd block: 19882097
- current block number: 20325087

## Description

Introduced a new LocalAdmin, not handled by the shared template, which mainContract admin (not the upgradeabilityAdmin) and who can change local system configs. This role was wrongly given to the SharedProxyAdminOwner before.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19882097 (main branch discovery), not current.

```diff
    contract XLayerValidiumEtrog (0x2B0ee28D4D51bC9aDde5E58E295873F61F4a0507) {
    +++ description: None
      name:
-        "XLayerValidiumEtrog"
+        "XLayerValidium"
    }
```

Generated with discovered.json: 0xedecf8c6eda26e5959db341cbc0c301a4ee07513

# Diff at Thu, 16 May 2024 10:59:54 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@59d36171ee3aaf27d6db0c75fdfba523d2dad686 block: 19731428
- current block number: 19882097

## Description

Changes related to merging with shared-polygon-cdk module.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19731428 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract SharedProxyAdmin (0x0F99738B2Fc14D77308337f3e2596b63aE7BCC4A)
    +++ description: None
```

```diff
-   Status: DELETED
    contract PolygonRollupManager (0x5132A183E9F3CB7C848b0AAC5Ae0c4f0491B7aB2)
    +++ description: None
```

```diff
-   Status: DELETED
    contract PolygonZkEVMTimelock (0xEf1462451C30Ea7aD8555386226059Fe837CA4EF)
    +++ description: None
```

Generated with discovered.json: 0x1578b061f84010d1b39b280f0615f999aad6c3c0

# Diff at Thu, 25 Apr 2024 09:16:57 GMT:

- author: sekuba (<sekuba@users.noreply.githum.com>)
- comparing to: main@10dca19aa3157c731f7438b0d699d97aafdf4cd7 block: 19718023
- current block number: 19731428

## Description

The contract (`PolygonValidiumStorageMigration.sol`, here `XLayerValidiumEtrog`) was already diff'd to Astar by Luca (0 diff).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19718023 (main branch discovery), not current.

```diff
    contract XLayerValidiumEtrog (0x2B0ee28D4D51bC9aDde5E58E295873F61F4a0507) {
    +++ description: None
      unverified:
-        true
    }
```

Generated with discovered.json: 0xf7a1cc6de98a35d884df3f95f5d35f645ab1b400

# Diff at Tue, 23 Apr 2024 12:14:08 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 19718023

## Description

New Validium. There is no diff with Astar zkEVM.

## Initial discovery

```diff
+   Status: CREATED
    contract XLayerValidiumDAC (0x05652Ec92366F3C2255991a265c499E01Ba58e6a)
    +++ description: None
```

```diff
+   Status: CREATED
    contract XLayerVerifier (0x0775e11309d75aA6b0967917fB0213C5673eDf81)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SharedProxyAdmin (0x0F99738B2Fc14D77308337f3e2596b63aE7BCC4A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x1e37EA18e9515db29b3E94A00eD31484A3130204)
    +++ description: None
```

```diff
+   Status: CREATED
    contract XLayerValidiumEtrog (0x2B0ee28D4D51bC9aDde5E58E295873F61F4a0507)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PolygonRollupManager (0x5132A183E9F3CB7C848b0AAC5Ae0c4f0491B7aB2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OKBImplementation (0x75231F58b43240C9718Dd58B4967c5114342a86c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PolygonZkEVMTimelock (0xEf1462451C30Ea7aD8555386226059Fe837CA4EF)
    +++ description: None
```
