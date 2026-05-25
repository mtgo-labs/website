---
title: FaveSticker
description: TL method messages.faveSticker
---

# messages.faveSticker

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb9ffc55b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputDocument` | | 
| `unfave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.FaveStickerRequest{
    id: nil, // InputDocument
    unfave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
