---
title: SendEncrypted
description: TL method messages.sendEncrypted
---

# messages.sendEncrypted

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x44fa7a15`  
Returns: [SentEncryptedMessage](/tl/types#sentencryptedmessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputEncryptedChat` | | 
| `random_id` | `int64` | | 
| `data` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendEncryptedRequest{
    silent: false,
    peer: nil, // InputEncryptedChat
    random_id: 0,
    data: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
