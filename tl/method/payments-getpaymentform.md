---
title: GetPaymentForm
description: TL method payments.getPaymentForm
---

# payments.getPaymentForm

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x37148dbb`  
Returns: [PaymentForm](/tl/types#paymentform)

## Parameters

| Name | Type | Description |
|---|---|---|
| `invoice` | `InputInvoice` | | 
| `theme_params` | `DataJSON` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetPaymentFormRequest{
    invoice: nil, // InputInvoice
    theme_params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
