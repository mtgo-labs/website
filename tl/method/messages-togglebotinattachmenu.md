---
title: ToggleBotInAttachMenu
description: TL method messages.toggleBotInAttachMenu
---

# messages.toggleBotInAttachMenu

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x69f59d69`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `write_allowed` | `bool` *(flags.0, optional)* | | 
| `bot` | `InputUser` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleBotInAttachMenuRequest{
    write_allowed: false,
    bot: nil, // InputUser
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
