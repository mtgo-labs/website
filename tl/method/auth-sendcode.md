---
title: SendCode
description: TL method auth.sendCode
---

# auth.sendCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa677244f`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `api_id` | `int32` | | 
| `api_hash` | `string` | | 
| `settings` | `CodeSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SendCodeRequest{
    phone_number: "",
    api_id: 0,
    api_hash: "",
    settings: nil, // CodeSettings
})
if err != nil {
    panic(err)
}
print(result)
```
