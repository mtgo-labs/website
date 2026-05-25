---
title: CreateStickerSet
description: TL method stickers.createStickerSet
---

# stickers.createStickerSet

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9021ab67`  
Returns: [StickerSet](/tl/types#stickerset)

## Parameters

| Name | Type | Description |
|---|---|---|
| `masks` | `bool` *(flags.0, optional)* | | 
| `emojis` | `bool` *(flags.5, optional)* | | 
| `text_color` | `bool` *(flags.6, optional)* | | 
| `user_id` | `InputUser` | | 
| `title` | `string` | | 
| `short_name` | `string` | | 
| `thumb` | `InputDocument` *(flags.2, optional)* | | 
| `stickers` | `[]InputStickerSetItem` | | 
| `software` | `string` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateStickerSetRequest{
    masks: false,
    emojis: false,
    text_color: false,
    user_id: nil, // InputUser
    title: "",
    short_name: "",
    thumb: nil, // InputDocument
    stickers: nil,
    software: "",
})
if err != nil {
    panic(err)
}
print(result)
```
