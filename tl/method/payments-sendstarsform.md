---
title: SendStarsForm
description: TL method payments.sendStarsForm
---

# payments.sendStarsForm

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7998c914`  
Returns: [PaymentResult](/tl/types#paymentresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `form_id` | `int64` | | 
| `invoice` | `InputInvoice` | | 

## Example

```go
result, err := client.Raw(&tg.SendStarsFormRequest{
    form_id: 0,
    invoice: nil, // InputInvoice
})
if err != nil {
    panic(err)
}
print(result)
```
