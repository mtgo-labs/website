---
title: SetEmojiStickers
description: TL method channels.setEmojiStickers
---

# channels.setEmojiStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3cd930b7`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `stickerset` | `InputStickerSet` | | 

## Example

```go
result, err := client.Raw(&tg.SetEmojiStickersRequest{
    channel: nil, // InputChannel
    stickerset: nil, // InputStickerSet
})
if err != nil {
    panic(err)
}
print(result)
```
