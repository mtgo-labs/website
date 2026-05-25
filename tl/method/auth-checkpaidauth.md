---
title: CheckPaidAuth
description: TL method auth.checkPaidAuth
---

# auth.checkPaidAuth

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x56e59f9c`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `form_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.CheckPaidAuthRequest{
    phone_number: "",
    phone_code_hash: "",
    form_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
