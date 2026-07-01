---
title: SearchEmojiStickerSets
description: TL method messages.searchEmojiStickerSets
---

# messages.searchEmojiStickerSets

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x92b4494c`  
Returns: [FoundStickerSets](/tl/types#foundstickersets)

## Parameters

| Name | Type | Description |
|---|---|---|
| `exclude_featured` | `bool` *(flags.0, optional)* | | 
| `q` | `string` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SearchEmojiStickerSetsRequest{
    exclude_featured: false,
    q: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
