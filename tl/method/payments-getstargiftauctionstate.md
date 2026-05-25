---
title: GetStarGiftAuctionState
description: TL method payments.getStarGiftAuctionState
---

# payments.getStarGiftAuctionState

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5c9ff4d6`  
Returns: [StarGiftAuctionState](/tl/types#stargiftauctionstate)

## Parameters

| Name | Type | Description |
|---|---|---|
| `auction` | `InputStarGiftAuction` | | 
| `version` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftAuctionStateRequest{
    auction: nil, // InputStarGiftAuction
    version: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
