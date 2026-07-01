---
title: SendPaymentForm
description: TL method payments.sendPaymentForm
---

# payments.sendPaymentForm

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2d03522f`  
Returns: [PaymentResult](/tl/types#paymentresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `form_id` | `int64` | | 
| `invoice` | `InputInvoice` | | 
| `requested_info_id` | `string` *(flags.0, optional)* | | 
| `shipping_option_id` | `string` *(flags.1, optional)* | | 
| `credentials` | `InputPaymentCredentials` | | 
| `tip_amount` | `int64` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendPaymentFormRequest{
    form_id: 0,
    invoice: nil, // InputInvoice
    requested_info_id: "",
    shipping_option_id: "",
    credentials: nil, // InputPaymentCredentials
    tip_amount: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
