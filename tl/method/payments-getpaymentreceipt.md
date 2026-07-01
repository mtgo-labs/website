---
title: GetPaymentReceipt
description: TL method payments.getPaymentReceipt
---

# payments.getPaymentReceipt

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2478d1cc`  
Returns: [PaymentReceipt](/tl/types#paymentreceipt)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPaymentReceiptRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
