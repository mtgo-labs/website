---
title: FulfillStarsSubscription
description: TL method payments.fulfillStarsSubscription
---

# payments.fulfillStarsSubscription

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcc5bebb3`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `subscription_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.FulfillStarsSubscriptionRequest{
    peer: nil, // InputPeer
    subscription_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
