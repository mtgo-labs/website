---
title: UpgradeStarGift
description: TL method payments.upgradeStarGift
---

# payments.upgradeStarGift

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xaed6e4f5`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `keep_original_details` | `bool` *(flags.0, optional)* | | 
| `stargift` | `InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.UpgradeStarGiftRequest{
    keep_original_details: false,
    stargift: nil, // InputSavedStarGift
})
if err != nil {
    panic(err)
}
print(result)
```
