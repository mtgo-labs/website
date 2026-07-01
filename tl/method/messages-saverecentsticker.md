---
title: SaveRecentSticker
description: TL method messages.saveRecentSticker
---

# messages.saveRecentSticker

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x392718f8`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `attached` | `bool` *(flags.0, optional)* | | 
| `id` | `InputDocument` | | 
| `unsave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SaveRecentStickerRequest{
    attached: false,
    id: nil, // InputDocument
    unsave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
