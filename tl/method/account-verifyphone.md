---
title: VerifyPhone
description: TL method account.verifyPhone
---

# account.verifyPhone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4dd3a7f6`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `phone_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.VerifyPhoneRequest{
    phone_number: "",
    phone_code_hash: "",
    phone_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
