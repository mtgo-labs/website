---
title: SignUp
description: TL method auth.signUp
---

# auth.signUp

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xaac7b717`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_joined_notifications` | `bool` *(flags.0, optional)* | | 
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `first_name` | `string` | | 
| `last_name` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SignUpRequest{
    no_joined_notifications: false,
    phone_number: "",
    phone_code_hash: "",
    first_name: "",
    last_name: "",
})
if err != nil {
    panic(err)
}
print(result)
```
