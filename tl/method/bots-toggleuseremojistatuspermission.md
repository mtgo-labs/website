---
title: ToggleUserEmojiStatusPermission
description: TL method bots.toggleUserEmojiStatusPermission
---

# bots.toggleUserEmojiStatusPermission

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x06de6392`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleUserEmojiStatusPermissionRequest{
    bot: nil, // InputUser
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
