---
title: AddStickerToSet
description: TL method stickers.addStickerToSet
---

# stickers.addStickerToSet

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8653febe`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 
| `sticker` | `InputStickerSetItem` | | 

## Example

```go
result, err := client.Raw(&tg.AddStickerToSetRequest{
    stickerset: nil, // InputStickerSet
    sticker: nil, // InputStickerSetItem
})
if err != nil {
    panic(err)
}
print(result)
```
