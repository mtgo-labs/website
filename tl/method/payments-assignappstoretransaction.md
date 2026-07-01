---
title: AssignAppStoreTransaction
description: TL method payments.assignAppStoreTransaction
---

# payments.assignAppStoreTransaction

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x80ed747d`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `receipt` | `[]byte` | | 
| `purpose` | `InputStorePaymentPurpose` | | 

## Example

```go
result, err := client.Raw(&tg.AssignAppStoreTransactionRequest{
    receipt: nil,
    purpose: nil, // InputStorePaymentPurpose
})
if err != nil {
    panic(err)
}
print(result)
```
