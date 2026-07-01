---
title: SaveAutoDownloadSettings
description: TL method account.saveAutoDownloadSettings
---

# account.saveAutoDownloadSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x76f36233`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `low` | `bool` *(flags.0, optional)* | | 
| `high` | `bool` *(flags.1, optional)* | | 
| `settings` | `AutoDownloadSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SaveAutoDownloadSettingsRequest{
    low: false,
    high: false,
    settings: nil, // AutoDownloadSettings
})
if err != nil {
    panic(err)
}
print(result)
```
