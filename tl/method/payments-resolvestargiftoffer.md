---
title: ResolveStarGiftOffer
description: TL method payments.resolveStarGiftOffer
---

# payments.resolveStarGiftOffer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe9ce781c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `decline` | `bool` *(flags.0, optional)* | | 
| `offer_msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ResolveStarGiftOfferRequest{
    decline: false,
    offer_msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
