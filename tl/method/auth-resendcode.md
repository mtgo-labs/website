---
title: ResendCode
description: TL method auth.resendCode
---

# auth.resendCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcae47523`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `reason` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ResendCodeRequest{
    phone_number: "",
    phone_code_hash: "",
    reason: "",
})
if err != nil {
    panic(err)
}
print(result)
```
