---
title: CanPurchaseStore
description: TL method payments.canPurchaseStore
---

# payments.canPurchaseStore

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4fdc5ea7`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `purpose` | `InputStorePaymentPurpose` | | 

## Example

```go
result, err := client.Raw(&tg.CanPurchaseStoreRequest{
    purpose: nil, // InputStorePaymentPurpose
})
if err != nil {
    panic(err)
}
print(result)
```
