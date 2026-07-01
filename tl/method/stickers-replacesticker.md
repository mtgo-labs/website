---
title: ReplaceSticker
description: TL method stickers.replaceSticker
---

# stickers.replaceSticker

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4696459a`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sticker` | `InputDocument` | | 
| `new_sticker` | `InputStickerSetItem` | | 

## Example

```go
result, err := client.Raw(&tg.ReplaceStickerRequest{
    sticker: nil, // InputDocument
    new_sticker: nil, // InputStickerSetItem
})
if err != nil {
    panic(err)
}
print(result)
```
