---
title: SetEncryptedTyping
description: TL method messages.setEncryptedTyping
---

# messages.setEncryptedTyping

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x791451ed`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 
| `typing` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SetEncryptedTypingRequest{
    peer: nil, // InputEncryptedChat
    typing: false,
})
if err != nil {
    panic(err)
}
print(result)
```
