---
title: ToggleStarGiftsPinnedToTop
description: TL method payments.toggleStarGiftsPinnedToTop
---

# payments.toggleStarGiftsPinnedToTop

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1513e7b0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `stargift` | `[]InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleStarGiftsPinnedToTopRequest{
    peer: nil, // InputPeer
    stargift: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
