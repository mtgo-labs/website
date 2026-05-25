---
title: GetStarGiftAuctionAcquiredGifts
description: TL method payments.getStarGiftAuctionAcquiredGifts
---

# payments.getStarGiftAuctionAcquiredGifts

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6ba2cbec`  
Returns: [StarGiftAuctionAcquiredGifts](/tl/types#stargiftauctionacquiredgifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gift_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftAuctionAcquiredGiftsRequest{
    gift_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
