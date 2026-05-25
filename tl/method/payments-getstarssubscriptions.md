---
title: GetStarsSubscriptions
description: TL method payments.getStarsSubscriptions
---

# payments.getStarsSubscriptions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x032512c5`  
Returns: [StarsStatus](/tl/types#starsstatus)

## Parameters

| Name | Type | Description |
|---|---|---|
| `missing_balance` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `offset` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsSubscriptionsRequest{
    missing_balance: false,
    peer: nil, // InputPeer
    offset: "",
})
if err != nil {
    panic(err)
}
print(result)
```
