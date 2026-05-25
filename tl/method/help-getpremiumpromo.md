---
title: GetPremiumPromo
description: TL method help.getPremiumPromo
---

# help.getPremiumPromo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb81b93d4`  
Returns: [PremiumPromo](/tl/types#premiumpromo)

## Example

```go
result, err := client.Raw(&tg.GetPremiumPromoRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
