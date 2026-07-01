---
title: SetBotMenuButton
description: TL method bots.setBotMenuButton
---

# bots.setBotMenuButton

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4504d54f`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `button` | `BotMenuButton` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotMenuButtonRequest{
    user_id: nil, // InputUser
    button: nil, // BotMenuButton
})
if err != nil {
    panic(err)
}
print(result)
```
