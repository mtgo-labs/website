---
title: ConfirmBotConnection
description: TL method account.confirmBotConnection
---

# account.confirmBotConnection

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x67ed1f68`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.ConfirmBotConnectionRequest{
    bot_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
