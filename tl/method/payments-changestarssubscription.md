---
title: ChangeStarsSubscription
description: TL method payments.changeStarsSubscription
---

# payments.changeStarsSubscription

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc7770878`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `subscription_id` | `string` | | 
| `canceled` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ChangeStarsSubscriptionRequest{
    peer: nil, // InputPeer
    subscription_id: "",
    canceled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
