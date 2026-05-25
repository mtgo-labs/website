---
title: GetSuggestedStarRefBots
description: TL method payments.getSuggestedStarRefBots
---

# payments.getSuggestedStarRefBots

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0d6b48f7`  
Returns: [SuggestedStarRefBots](/tl/types#suggestedstarrefbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `order_by_revenue` | `bool` *(flags.0, optional)* | | 
| `order_by_date` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetSuggestedStarRefBotsRequest{
    order_by_revenue: false,
    order_by_date: false,
    peer: nil, // InputPeer
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
