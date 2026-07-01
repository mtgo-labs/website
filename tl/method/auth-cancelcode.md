---
title: CancelCode
description: TL method auth.cancelCode
---

# auth.cancelCode

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1f040578`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CancelCodeRequest{
    phone_number: "",
    phone_code_hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
