---
title: GetStarsRevenueStats
description: TL method payments.getStarsRevenueStats
---

# payments.getStarsRevenueStats

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd91ffad6`  
Returns: [StarsRevenueStats](/tl/types#starsrevenuestats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `ton` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsRevenueStatsRequest{
    dark: false,
    ton: false,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
