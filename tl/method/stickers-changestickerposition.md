---
title: ChangeStickerPosition
description: TL method stickers.changeStickerPosition
---

# stickers.changeStickerPosition

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xffb6d4ca`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sticker` | `InputDocument` | | 
| `position` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ChangeStickerPositionRequest{
    sticker: nil, // InputDocument
    position: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
