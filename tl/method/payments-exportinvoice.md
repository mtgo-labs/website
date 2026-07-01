---
title: ExportInvoice
description: TL method payments.exportInvoice
---

# payments.exportInvoice

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0f91b065`  
Returns: [ExportedInvoice](/tl/types#exportedinvoice)

## Parameters

| Name | Type | Description |
|---|---|---|
| `invoice_media` | `InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.ExportInvoiceRequest{
    invoice_media: nil, // InputMedia
})
if err != nil {
    panic(err)
}
print(result)
```
