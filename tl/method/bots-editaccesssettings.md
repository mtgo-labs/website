---
title: EditAccessSettings
description: TL method bots.editAccessSettings
---

# bots.editAccessSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x31813cd8`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `restricted` | `bool` *(flags.0, optional)* | | 
| `bot` | `InputUser` | | 
| `add_users` | `[]InputUser` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditAccessSettingsRequest{
    restricted: false,
    bot: nil, // InputUser
    add_users: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
