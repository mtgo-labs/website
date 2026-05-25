---
title: SendChangePhoneCode
description: TL method account.sendChangePhoneCode
---

# account.sendChangePhoneCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x82574ae5`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `settings` | `CodeSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SendChangePhoneCodeRequest{
    phone_number: "",
    settings: nil, // CodeSettings
})
if err != nil {
    panic(err)
}
print(result)
```
