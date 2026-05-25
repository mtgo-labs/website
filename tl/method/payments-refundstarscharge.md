---
title: RefundStarsCharge
description: TL method payments.refundStarsCharge
---

# payments.refundStarsCharge

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x25ae8f4a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `charge_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.RefundStarsChargeRequest{
    user_id: nil, // InputUser
    charge_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
