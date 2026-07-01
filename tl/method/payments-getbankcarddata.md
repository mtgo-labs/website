---
title: GetBankCardData
description: TL method payments.getBankCardData
---

# payments.getBankCardData

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2e79d779`  
Returns: [BankCardData](/tl/types#bankcarddata)

## Parameters

| Name | Type | Description |
|---|---|---|
| `number` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetBankCardDataRequest{
    number: "",
})
if err != nil {
    panic(err)
}
print(result)
```
