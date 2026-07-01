---
title: CraftStarGift
description: TL method payments.craftStarGift
---

# payments.craftStarGift

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb0f9684f`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `[]InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.CraftStarGiftRequest{
    stargift: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
