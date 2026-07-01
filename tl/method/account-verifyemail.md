---
title: VerifyEmail
description: TL method account.verifyEmail
---

# account.verifyEmail

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x032da4cf`  
Returns: [EmailVerified](/tl/types#emailverified)

## Parameters

| Name | Type | Description |
|---|---|---|
| `purpose` | `EmailVerifyPurpose` | | 
| `verification` | `EmailVerification` | | 

## Example

```go
result, err := client.Raw(&tg.VerifyEmailRequest{
    purpose: nil, // EmailVerifyPurpose
    verification: nil, // EmailVerification
})
if err != nil {
    panic(err)
}
print(result)
```
