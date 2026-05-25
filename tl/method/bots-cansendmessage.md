---
title: CanSendMessage
description: TL method bots.canSendMessage
---

# bots.canSendMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1359f4e6`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.CanSendMessageRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
