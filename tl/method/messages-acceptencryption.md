---
title: AcceptEncryption
description: TL method messages.acceptEncryption
---

# messages.acceptEncryption

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3dbc0415`  
Returns: [EncryptedChat](/tl/types#encryptedchat)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 
| `g_b` | `[]byte` | | 
| `key_fingerprint` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptEncryptionRequest{
    peer: nil, // InputEncryptedChat
    g_b: nil,
    key_fingerprint: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
