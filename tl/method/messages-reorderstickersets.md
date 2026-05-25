---
title: ReorderStickerSets
description: TL method messages.reorderStickerSets
---

# messages.reorderStickerSets

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x78337739`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `masks` | `bool` *(flags.0, optional)* | | 
| `emojis` | `bool` *(flags.1, optional)* | | 
| `order` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderStickerSetsRequest{
    masks: false,
    emojis: false,
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
