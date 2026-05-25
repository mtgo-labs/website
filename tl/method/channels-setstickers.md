---
title: SetStickers
description: TL method channels.setStickers
---

# channels.setStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xea8ca4f9`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `stickerset` | `InputStickerSet` | | 

## Example

```go
result, err := client.Raw(&tg.SetStickersRequest{
    channel: nil, // InputChannel
    stickerset: nil, // InputStickerSet
})
if err != nil {
    panic(err)
}
print(result)
```
