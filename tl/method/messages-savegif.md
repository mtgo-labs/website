---
title: SaveGIF
description: TL method messages.saveGif
---

# messages.saveGif

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x327a30cb`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputDocument` | | 
| `unsave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SaveGIFRequest{
    id: nil, // InputDocument
    unsave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
