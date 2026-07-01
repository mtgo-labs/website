---
title: ChangeSticker
description: TL method stickers.changeSticker
---

# stickers.changeSticker

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf5537ebc`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sticker` | `InputDocument` | | 
| `emoji` | `string` *(flags.0, optional)* | | 
| `mask_coords` | `MaskCoords` *(flags.1, optional)* | | 
| `keywords` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ChangeStickerRequest{
    sticker: nil, // InputDocument
    emoji: "",
    mask_coords: nil, // MaskCoords
    keywords: "",
})
if err != nil {
    panic(err)
}
print(result)
```
