---
title: DeleteStickerSet
description: TL method stickers.deleteStickerSet
---

# stickers.deleteStickerSet

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x87704394`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteStickerSetRequest{
    stickerset: nil, // InputStickerSet
})
if err != nil {
    panic(err)
}
print(result)
```
