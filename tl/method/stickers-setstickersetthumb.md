---
title: SetStickerSetThumb
description: TL method stickers.setStickerSetThumb
---

# stickers.setStickerSetThumb

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa76a5392`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 
| `thumb` | `InputDocument` *(flags.0, optional)* | | 
| `thumb_document_id` | `int64` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetStickerSetThumbRequest{
    stickerset: nil, // InputStickerSet
    thumb: nil, // InputDocument
    thumb_document_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
