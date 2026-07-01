---
title: GetSavedStarGift
description: TL method payments.getSavedStarGift
---

# payments.getSavedStarGift

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb455a106`  
Returns: [SavedStarGifts](/tl/types#savedstargifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `[]InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedStarGiftRequest{
    stargift: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
