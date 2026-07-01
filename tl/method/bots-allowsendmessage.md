---
title: AllowSendMessage
description: TL method bots.allowSendMessage
---

# bots.allowSendMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf132e3ef`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.AllowSendMessageRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
