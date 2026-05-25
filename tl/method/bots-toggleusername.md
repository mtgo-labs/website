---
title: ToggleUsername
description: TL method bots.toggleUsername
---

# bots.toggleUsername

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x053ca973`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `username` | `string` | | 
| `active` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleUsernameRequest{
    bot: nil, // InputUser
    username: "",
    active: false,
})
if err != nil {
    panic(err)
}
print(result)
```
