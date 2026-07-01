---
title: RenameStickerSet
description: TL method stickers.renameStickerSet
---

# stickers.renameStickerSet

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x124b1c00`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 
| `title` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.RenameStickerSetRequest{
    stickerset: nil, // InputStickerSet
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
