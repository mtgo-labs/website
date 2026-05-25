---
title: SendVerifyPhoneCode
description: TL method account.sendVerifyPhoneCode
---

# account.sendVerifyPhoneCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa5a356f9`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `settings` | `CodeSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SendVerifyPhoneCodeRequest{
    phone_number: "",
    settings: nil, // CodeSettings
})
if err != nil {
    panic(err)
}
print(result)
```
