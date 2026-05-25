---
title: GetStickerSet
description: TL method messages.getStickerSet
---

# messages.getStickerSet

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc8a0ec74`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStickerSetRequest{
    stickerset: nil, // InputStickerSet
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
