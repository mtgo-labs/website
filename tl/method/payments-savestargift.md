---
title: SaveStarGift
description: TL method payments.saveStarGift
---

# payments.saveStarGift

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2a2a697c`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `unsave` | `bool` *(flags.0, optional)* | | 
| `stargift` | `InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.SaveStarGiftRequest{
    unsave: false,
    stargift: nil, // InputSavedStarGift
})
if err != nil {
    panic(err)
}
print(result)
```
