---
title: GetStarsGiveawayOptions
description: TL method payments.getStarsGiveawayOptions
---

# payments.getStarsGiveawayOptions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbd1efd3e`  
Returns: [StarsGiveawayOption](/tl/types#starsgiveawayoption)

## Example

```go
result, err := client.Raw(&tg.GetStarsGiveawayOptionsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
