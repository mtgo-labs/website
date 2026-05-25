---
title: RemoveStickerFromSet
description: TL method stickers.removeStickerFromSet
---

# stickers.removeStickerFromSet

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf7760f51`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sticker` | `InputDocument` | | 

## Example

```go
result, err := client.Raw(&tg.RemoveStickerFromSetRequest{
    sticker: nil, // InputDocument
})
if err != nil {
    panic(err)
}
print(result)
```
