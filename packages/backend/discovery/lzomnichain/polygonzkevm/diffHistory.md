Generated with discovered.json: 0xd91796983ecd0735f26ad2122f3a9ab94878b2ef

# Diff at Mon, 27 May 2024 13:20:40 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@bd6b9ab7ea90501ef9c16ad40295a3c38f7dd0cb block: 11870389
- current block number: 12848751

## Description

Hide the nonce of the L2 Multisig from the discovery updates as it is too noisy.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 11870389 (main branch discovery), not current.

```diff
    contract GnosisSafeL2 (0x8df01A9F8bE5776F4280B7056e13A0Fc0E007827) {
    +++ description: None
      name:
-        "GnosisSafeL2"
+        "LayerZeroMultisig_pzkevm"
      values.nonce:
-        26
    }
```

Generated with discovered.json: 0xae1093daefd3ed5c33eb23de15d5e6e6410db6dd

# Diff at Tue, 23 Apr 2024 13:25:12 GMT:

- author: sekuba (<sekuba@users.noreply.githum.com>)
- comparing to: main@c9af11bd773e0770f181b9628ed0e91c093b8bd0 block: 11123143
- current block number: 11870389

## Description

The Endpoint- and UltraLightNodeV2 owners now point to a Multisig. (Was EOA before)

## Watched changes

```diff
    contract Endpoint (0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4) {
    +++ description: None
      values.owner:
-        "0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327"
+        "0x8df01A9F8bE5776F4280B7056e13A0Fc0E007827"
    }
```

```diff
    contract UltraLightNodeV2 (0xFe7C30860D01e28371D40434806F4A8fcDD3A098) {
    +++ description: None
      values.owner:
-        "0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327"
+        "0x8df01A9F8bE5776F4280B7056e13A0Fc0E007827"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafeL2 (0x8df01A9F8bE5776F4280B7056e13A0Fc0E007827)
    +++ description: None
```

## Source code changes

```diff
.../implementation/contracts/GnosisSafe.sol        | 422 +++++++++++++++++++++
 .../implementation/contracts/GnosisSafeL2.sol      |  86 +++++
 .../implementation/contracts/base/Executor.sol     |  27 ++
 .../contracts/base/FallbackManager.sol             |  53 +++
 .../implementation/contracts/base/GuardManager.sol |  50 +++
 .../contracts/base/ModuleManager.sol               | 133 +++++++
 .../implementation/contracts/base/OwnerManager.sol | 149 ++++++++
 .../implementation/contracts/common/Enum.sol       |   8 +
 .../contracts/common/EtherPaymentFallback.sol      |  13 +
 .../contracts/common/SecuredTokenTransfer.sol      |  35 ++
 .../contracts/common/SelfAuthorized.sol            |  16 +
 .../contracts/common/SignatureDecoder.sol          |  36 ++
 .../implementation/contracts/common/Singleton.sol  |  11 +
 .../contracts/common/StorageAccessible.sol         |  47 +++
 .../contracts/external/GnosisSafeMath.sol          |  54 +++
 .../contracts/interfaces/ISignatureValidator.sol   |  20 +
 .../.code/GnosisSafeL2/implementation/meta.txt     |   2 +
 .../proxy/contracts/proxies/GnosisSafeProxy.sol    |  44 +++
 .../polygonzkevm/.code/GnosisSafeL2/proxy/meta.txt |   2 +
 19 files changed, 1208 insertions(+)
```

Generated with discovered.json: 0x14c2c1953c2c6c06361ba149c9b0fd65b42d4395

# Diff at Wed, 06 Mar 2024 11:41:58 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@1a2512004b35590384683b93c95d8ec95426d2a6 block: 9115900
- current block number: 10513424

## Description

Added v2 contracts to libraryLookup

## Watched changes

```diff
    contract Endpoint (0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4) {
    +++ description: None
      values.latestVersion:
-        1
+        3
      values.libraryLookup[2]:
+        "0x23ec43e2b8f9aE21D895eEa5a1a9c444fe301044"
      values.libraryLookup[1]:
+        "0x8161B3B224Cd6ce37cC20BE61607C3E19eC2A8A6"
    }
```

Generated with discovered.json: 0x1cbb4540e92edc35852de9bde14c986343fdd000

# Diff at Tue, 09 Jan 2024 16:43:38 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@0b578574e6a64020b5157f700c09de14e6b3eed3 block: 3763915
- current block number: 9115900

## Description

Unified configurations across L2s. Few new remote chains configurations added.

## Watched changes

```diff
    contract UltraLightNodeV2 (0xFe7C30860D01e28371D40434806F4A8fcDD3A098) {
      values.chainAddressSizeMap.126:
+        20
      values.chainAddressSizeMap.202:
+        20
      values.chainAddressSizeMap.210:
+        20
      values.chainAddressSizeMap.214:
+        20
      values.defaultAdapterParams.126:
+        {"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"}
      values.defaultAdapterParams.202:
+        {"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"}
      values.defaultAdapterParams.210:
+        {"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"}
      values.defaultAdapterParams.214:
+        {"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"}
      values.defaultAppConfig.108.inboundBlockConfirm:
-        500000
+        260
      values.defaultAppConfig.126:
+        {"inboundProofLib":2,"inboundBlockConfirm":10,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"}
      values.defaultAppConfig.202:
+        {"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"}
      values.defaultAppConfig.210:
+        {"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"}
      values.defaultAppConfig.214:
+        {"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"}
      values.inboundProofLibrary.126:
+        ["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"]
      values.inboundProofLibrary.202:
+        ["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"]
      values.inboundProofLibrary.210:
+        ["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"]
      values.inboundProofLibrary.214:
+        ["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"]
      values.supportedOutboundProof.126:
+        2
      values.supportedOutboundProof.202:
+        2
      values.supportedOutboundProof.210:
+        2
      values.supportedOutboundProof.214:
+        2
      values.ulnLookup.126:
+        "0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2"
      values.ulnLookup.202:
+        "0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251"
      values.ulnLookup.210:
+        "0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251"
      values.ulnLookup.214:
+        "0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251"
    }
```

## Source code changes

```diff
.../polygon-zkevm/{.code@3763915 => .code}/ProxyAdmin/meta.txt          | 2 +-
 discovery/lzomnichain/polygon-zkevm/{.code@3763915 => .code}/meta.txt   | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

## Config related changes

Following changes come from updates made to the config file,
not from differences found during discovery. Values are
for block 3763915 (main branch discovery), not current.

```diff
    contract  (0x2D61DCDD36F10b22176E0433B86F74567d529aAa) {
      sinceTimestamp:
+        1679974014
    }
```

```diff
    contract  (0x6F475642a6e85809B1c36Fa62763669b1b48DD5B) {
      sinceTimestamp:
+        1679974072
    }
```

```diff
    contract Endpoint (0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4) {
      values.libraryLookup:
+        ["0xFe7C30860D01e28371D40434806F4A8fcDD3A098"]
      sinceTimestamp:
+        1679974014
    }
```

```diff
    contract UltraLightNodeV2 (0xFe7C30860D01e28371D40434806F4A8fcDD3A098) {
      values.chainAddressSizeMap:
+        {"101":20,"102":20,"106":20,"108":32,"109":20,"110":20,"111":20,"112":20,"125":20,"145":20,"151":20,"158":20,"165":20,"177":20,"181":20,"183":20,"184":20}
      values.defaultAdapterParams:
+        {"101":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"102":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"106":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"108":{"proofType":2,"adapterParams":"0x000100000000000000000000000000000000000000000000000000000000000009c4"},"109":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"110":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"111":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"112":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"125":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"145":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"151":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"158":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"165":{"proofType":2,"adapterParams":"0x000100000000000000000000000000000000000000000000000000000000003d0900"},"177":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"181":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"183":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"},"184":{"proofType":2,"adapterParams":"0x00010000000000000000000000000000000000000000000000000000000000030d40"}}
      values.defaultAppConfig:
+        {"101":{"inboundProofLib":2,"inboundBlockConfirm":15,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"102":{"inboundProofLib":2,"inboundBlockConfirm":20,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"106":{"inboundProofLib":2,"inboundBlockConfirm":12,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"108":{"inboundProofLib":1,"inboundBlockConfirm":500000,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"109":{"inboundProofLib":2,"inboundBlockConfirm":512,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"110":{"inboundProofLib":2,"inboundBlockConfirm":20,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"111":{"inboundProofLib":2,"inboundBlockConfirm":20,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"112":{"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"125":{"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"145":{"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"151":{"inboundProofLib":2,"inboundBlockConfirm":5,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"158":{"inboundProofLib":2,"inboundBlockConfirm":20,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"165":{"inboundProofLib":1,"inboundBlockConfirm":20,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"177":{"inboundProofLib":2,"inboundBlockConfirm":2,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"181":{"inboundProofLib":2,"inboundBlockConfirm":2,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"183":{"inboundProofLib":2,"inboundBlockConfirm":10,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"},"184":{"inboundProofLib":2,"inboundBlockConfirm":10,"outboundProofType":2,"outboundBlockConfirm":20,"oracle":"0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb","relayer":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"}}
      values.inboundProofLibrary:
+        {"101":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"102":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"106":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"108":"0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675","109":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"110":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"111":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"112":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"125":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"145":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"151":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"158":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"165":"0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675","177":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"181":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"183":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"],"184":["0x38dE71124f7a447a01D67945a51eDcE9FF491251","0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"]}
      values.supportedOutboundProof:
+        {"101":2,"102":2,"106":2,"108":2,"109":2,"110":2,"111":2,"112":2,"125":2,"145":2,"151":2,"158":2,"165":2,"177":2,"181":2,"183":2,"184":2}
      values.ulnLookup:
+        {"101":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","102":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","106":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","108":"0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90","109":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","110":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","111":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","112":"0x0000000000000000000000004d73adb72bc3dd368966edd0f0b2148401a178e2","125":"0x000000000000000000000000377530cda84dfb2673bf4d145dcf0c4d7fdcb5b6","145":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251","151":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251","158":"0x000000000000000000000000fe7c30860d01e28371d40434806f4a8fcdd3a098","165":"0x000000000000000000000000042b8289c97896529ec2fe49ba1a8b9c956a86cc","177":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251","181":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251","183":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251","184":"0x00000000000000000000000038de71124f7a447a01d67945a51edce9ff491251"}
      sinceTimestamp:
+        1679974014
    }
```

```diff
+   Status: CREATED
    contract  (0x38dE71124f7a447a01D67945a51eDcE9FF491251) {
    }
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x3c2269811836af69497E5F486A85D7316753cf62) {
    }
```

```diff
+   Status: CREATED
    contract  (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
    }
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    }
```

```diff
+   Status: CREATED
    contract  (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    }
```

```diff
+   Status: CREATED
    contract  (0xA6Bf2bE6c60175601BF88217c75dD4b14ABB5FBb) {
    }
```
