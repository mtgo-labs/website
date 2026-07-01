---
title: GetPromoData
description: TL method help.getPromoData
---

# help.getPromoData

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc0977421`  
Returns: [PromoData](/tl/types#promodata)

## Example

```go
result, err := client.Raw(&tg.GetPromoDataRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
