---
title: GetAttachedStickers
description: TL method messages.getAttachedStickers
---

# messages.getAttachedStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xcc5b67cc`  
Returns: [StickerSetCovered](/tl/types#stickersetcovered)

## Parameters

| Name | Type | Description |
|---|---|---|
| `media` | `InputStickeredMedia` | | 

## Example

```go
result, err := client.Raw(&tg.GetAttachedStickersRequest{
    media: nil, // InputStickeredMedia
})
if err != nil {
    panic(err)
}
print(result)
```
