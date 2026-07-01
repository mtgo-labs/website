---
title: ToggleStickerSets
description: TL method messages.toggleStickerSets
---

# messages.toggleStickerSets

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb5052fea`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `uninstall` | `bool` *(flags.0, optional)* | | 
| `archive` | `bool` *(flags.1, optional)* | | 
| `unarchive` | `bool` *(flags.2, optional)* | | 
| `stickersets` | `[]InputStickerSet` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleStickerSetsRequest{
    uninstall: false,
    archive: false,
    unarchive: false,
    stickersets: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
