---
title: LaunchPrepaidGiveaway
description: TL method payments.launchPrepaidGiveaway
---

# payments.launchPrepaidGiveaway

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5ff58f20`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `giveaway_id` | `int64` | | 
| `purpose` | `InputStorePaymentPurpose` | | 

## Example

```go
result, err := client.Raw(&tg.LaunchPrepaidGiveawayRequest{
    peer: nil, // InputPeer
    giveaway_id: 0,
    purpose: nil, // InputStorePaymentPurpose
})
if err != nil {
    panic(err)
}
print(result)
```
