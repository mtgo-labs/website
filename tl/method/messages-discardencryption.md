---
title: DiscardEncryption
description: TL method messages.discardEncryption
---

# messages.discardEncryption

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf393aea0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `delete_history` | `bool` *(flags.0, optional)* | | 
| `chat_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DiscardEncryptionRequest{
    delete_history: false,
    chat_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
