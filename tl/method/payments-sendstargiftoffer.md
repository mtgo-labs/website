---
title: SendStarGiftOffer
description: TL method payments.sendStarGiftOffer
---

# payments.sendStarGiftOffer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8fb86b41`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `slug` | `string` | | 
| `price` | `StarsAmount` | | 
| `duration` | `int32` | | 
| `random_id` | `int64` | | 
| `allow_paid_stars` | `int64` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendStarGiftOfferRequest{
    peer: nil, // InputPeer
    slug: "",
    price: nil, // StarsAmount
    duration: 0,
    random_id: 0,
    allow_paid_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
