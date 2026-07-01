---
title: ValidateRequestedInfo
description: TL method payments.validateRequestedInfo
---

# payments.validateRequestedInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb6c8f12b`  
Returns: [ValidatedRequestedInfo](/tl/types#validatedrequestedinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `save` | `bool` *(flags.0, optional)* | | 
| `invoice` | `InputInvoice` | | 
| `info` | `PaymentRequestedInfo` | | 

## Example

```go
result, err := client.Raw(&tg.ValidateRequestedInfoRequest{
    save: false,
    invoice: nil, // InputInvoice
    info: nil, // PaymentRequestedInfo
})
if err != nil {
    panic(err)
}
print(result)
```
