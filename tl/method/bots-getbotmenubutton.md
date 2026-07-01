---
title: GetBotMenuButton
description: TL method bots.getBotMenuButton
---

# bots.getBotMenuButton

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9c60eb28`  
Returns: [BotMenuButton](/tl/types#botmenubutton)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotMenuButtonRequest{
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
