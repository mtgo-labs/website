---
title: SearchStickerSets
description: TL method messages.searchStickerSets
---

# messages.searchStickerSets

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x35705b8a`  
Returns: [FoundStickerSets](/tl/types#foundstickersets)

## Parameters

| Name | Type | Description |
|---|---|---|
| `exclude_featured` | `bool` *(flags.0, optional)* | | 
| `q` | `string` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SearchStickerSetsRequest{
    exclude_featured: false,
    q: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
