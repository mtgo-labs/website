---
title: GetStarsRevenueAdsAccountURL
description: TL method payments.getStarsRevenueAdsAccountUrl
---

# payments.getStarsRevenueAdsAccountUrl

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd1d7efc5`  
Returns: [StarsRevenueAdsAccountURL](/tl/types#starsrevenueadsaccounturl)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsRevenueAdsAccountURLRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
