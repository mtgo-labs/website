---
title: RequestEncryption
description: TL method messages.requestEncryption
---

# messages.requestEncryption

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf64daf43`  
Returns: [EncryptedChat](/tl/types#encryptedchat)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `random_id` | `int32` | | 
| `g_a` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.RequestEncryptionRequest{
    user_id: nil, // InputUser
    random_id: 0,
    g_a: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
