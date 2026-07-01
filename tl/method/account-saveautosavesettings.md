---
title: SaveAutoSaveSettings
description: TL method account.saveAutoSaveSettings
---

# account.saveAutoSaveSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd69b8361`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `users` | `bool` *(flags.0, optional)* | | 
| `chats` | `bool` *(flags.1, optional)* | | 
| `broadcasts` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` *(flags.3, optional)* | | 
| `settings` | `AutoSaveSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SaveAutoSaveSettingsRequest{
    users: false,
    chats: false,
    broadcasts: false,
    peer: nil, // InputPeer
    settings: nil, // AutoSaveSettings
})
if err != nil {
    panic(err)
}
print(result)
```
