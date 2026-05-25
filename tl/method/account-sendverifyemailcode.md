---
title: SendVerifyEmailCode
description: TL method account.sendVerifyEmailCode
---

# account.sendVerifyEmailCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x98e037bb`  
Returns: [SentEmailCode](/tl/types#sentemailcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `purpose` | `EmailVerifyPurpose` | | 
| `email` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SendVerifyEmailCodeRequest{
    purpose: nil, // EmailVerifyPurpose
    email: "",
})
if err != nil {
    panic(err)
}
print(result)
```
