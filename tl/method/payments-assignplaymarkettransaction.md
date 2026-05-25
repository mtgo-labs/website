---
title: AssignPlayMarketTransaction
description: TL method payments.assignPlayMarketTransaction
---

# payments.assignPlayMarketTransaction

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdffd50d3`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `receipt` | `DataJSON` | | 
| `purpose` | `InputStorePaymentPurpose` | | 

## Example

```go
result, err := client.Raw(&tg.AssignPlayMarketTransactionRequest{
    receipt: nil, // DataJSON
    purpose: nil, // InputStorePaymentPurpose
})
if err != nil {
    panic(err)
}
print(result)
```
