---
title: UpdateStarGiftPrice
description: TL method payments.updateStarGiftPrice
---

# payments.updateStarGiftPrice

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xedbe6ccb`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `InputSavedStarGift` | | 
| `resell_amount` | `StarsAmount` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateStarGiftPriceRequest{
    stargift: nil, // InputSavedStarGift
    resell_amount: nil, // StarsAmount
})
if err != nil {
    panic(err)
}
print(result)
```
