Generated with discovered.json: 0x823df2d38ee05218e577638bf8aebb0cfc3be7c8

# Diff at Thu, 18 Jul 2024 10:31:44 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 20331900
- current block number: 20331900

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20331900 (main branch discovery), not current.

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      descriptions:
+        ["It can act on behalf of 0x35d5D43271548c984662d4879FBc8e041Bc1Ff93, inheriting its permissions."]
    }
```

Generated with discovered.json: 0xea71ccb52a7fbc8dc15a42c895b9a0c73ce801e5

# Diff at Thu, 18 Jul 2024 07:25:30 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@14a8b2e13da16d68d776511f98207e5360accba3 block: 19927699
- current block number: 20331900

## Description

Lyra bumps gas limit by 4x to 120M. This is in the ballpark of what base is also running.

## Watched changes

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
    +++ description: None
      values.gasLimit:
-        30000000
+        120000000
    }
```

Generated with discovered.json: 0x0eea8969d66cf8d703d845a3102f84b758742fa1

# Diff at Wed, 22 May 2024 20:07:21 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@bac4efad06804152ae97853892e122a801bbc509 block: 19918742
- current block number: 19927699

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

Generated with discovered.json: 0xb37e4ebb45bc5eac603646bd455d4891ca8d5069

# Diff at Tue, 21 May 2024 14:01:11 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@c032520e456d0e6bee8b65e420ff7dba9f36bd48 block: 19531962
- current block number: 19918742

## Description

Name change.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531962 (main branch discovery), not current.

```diff
    contract LyraMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      name:
-        "LyraMultisig"
+        "ConduitMultisig"
    }
```

Generated with discovered.json: 0x07856a84aab1e3a9f52fa26b7cf05e154e094e4d

# Diff at Thu, 28 Mar 2024 10:17:32 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@dd32bb06b292cc8459fb09925454ee3a90f5c27e block: 19488865
- current block number: 19531962

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19488865 (main branch discovery), not current.

```diff
    contract LyraMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 5 (60%)"
    }
```

```diff
    contract ChallengerMultisig (0x91F4be0C264FAFA1fEd75c4440910Cba2cAd98e8) {
    +++ description: None
      upgradeability.threshold:
+        "4 of 6 (67%)"
    }
```

Generated with discovered.json: 0x483b8b606b6d775399f6b2056e464f7b45b6ef3a

# Diff at Mon, 11 Mar 2024 13:04:46 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@64454506aee2b4b4e15b121f096369e92ec4cf20 block: 19176784
- current block number: 19412035

## Description

Update OP stack DA handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19176784 (main branch discovery), not current.

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
+        false
    }
```

Generated with discovered.json: 0xe094838366e0c9e35830fe03bd7405a15ba56cab

# Diff at Wed, 07 Feb 2024 14:03:33 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@2e35800e01005d93332a552032058dcd67f3631d block: 19175190
- current block number: 19176784

## Description

Added opStackSequencerInbox handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19175190 (main branch discovery), not current.

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
      values.sequencerInbox:
+        "0x5f7f7f6DB967F0ef10BdA0678964DBA185d16c50"
    }
```

Generated with discovered.json: 0x0f77399b9256ea1e65b40583d3103421cce8b78e

# Diff at Wed, 07 Feb 2024 08:41:30 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@64f1e0f27f831d3ef860a1c2faad8c77e04e6c29 block: 19090320
- current block number: 19175190

## Description

Updated with the new OpDAHandler to remove the field.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19090320 (main branch discovery), not current.

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
      values.opStackDA.isAllTxsLengthEqualToCelestiaDAExample:
-        true
    }
```

Generated with discovered.json: 0x4503a45a15552e2f0c5fac881fdbb0f026d5f650

# Diff at Fri, 26 Jan 2024 10:56:14 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@bb037f7100968a00265a4787338e51ca81aafe9b block: 19032828
- current block number: 19090320

## Description

Added opStackDa handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19032828 (main branch discovery), not current.

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
      values.opStackDA:
+        {"isAllTxsLengthEqualToCelestiaDAExample":true,"isSomeTxsLengthEqualToCelestiaDAExample":true}
    }
```

Generated with discovered.json: 0xf25c1536731bdb55d1cbfab87638b709e4c1b961

# Diff at Thu, 18 Jan 2024 09:23:11 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@0cb1eb82b45ad89a272a3c1b8f8f24ae020627cc block: 18927731
- current block number: 19032828

## Description

Dynamic fee overhead has been changed.

## Watched changes

```diff
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
      values.scalar:
-        684000
+        68400
    }
```

# Diff at Wed, 03 Jan 2024 15:30:59 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@e8eb03b39061a86a8ec01e26d970e40d080ad225

## Description

One owner is removed and another is added to LyraMultisig.

## Watched changes

```diff
    contract LyraMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
      values.getOwners.4:
-        "0x5553a23a71Bc7985c8E58Ca08072D2Fa9D1D1F4c"
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.getOwners.3:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.getOwners.2:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.getOwners.1:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.getOwners.0:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
    }
```

# Diff at Tue, 19 Dec 2023 08:25:57 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@

## Description

Add initial config for Lyra.

## Watched changes

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x08Dea366F26C25a08C8D1C3568ad07d1e587136d) {
    }
```

```diff
+   Status: CREATED
    contract SystemConfig (0x0e4C4CDd01ceCB01070E9Fdfe7600871e4ae996e) {
    }
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x1145E7848c8B64c6cab86Fd6D378733385c5C3Ba) {
    }
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x35d5D43271548c984662d4879FBc8e041Bc1Ff93) {
    }
```

```diff
+   Status: CREATED
    contract LyraMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    }
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x5456f02c08e9A018E42C39b351328E5AA864174A) {
    }
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x61E44dC0dae6888B5a301887732217d5725B0bFf) {
    }
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x6CC3268794c5d3E3d9d52adEfC748B59d536cb22) {
    }
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x85eA9c11cf3D4786027F7FD08F4406b15777e5f8) {
    }
```

```diff
+   Status: CREATED
    contract ChallengerMultisig (0x91F4be0C264FAFA1fEd75c4440910Cba2cAd98e8) {
    }
```

```diff
+   Status: CREATED
    contract AddressManager (0xC845F9C4004EB35a8bde8ad89C4760a9c0e65CAB) {
    }
```
