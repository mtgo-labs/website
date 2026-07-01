---
title: SignIn
description: TL method auth.signIn
---

# auth.signIn

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8d52a951`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `phone_code` | `string` *(flags.0, optional)* | | 
| `email_verification` | `EmailVerification` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SignInRequest{
    phone_number: "",
    phone_code_hash: "",
    phone_code: "",
    email_verification: nil, // EmailVerification
})
if err != nil {
    panic(err)
}
print(result)
```
