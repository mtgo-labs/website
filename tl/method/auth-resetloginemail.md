---
title: ResetLoginEmail
description: TL method auth.resetLoginEmail
---

# auth.resetLoginEmail

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7e960193`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ResetLoginEmailRequest{
    phone_number: "",
    phone_code_hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
