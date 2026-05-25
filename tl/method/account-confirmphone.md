---
title: ConfirmPhone
description: TL method account.confirmPhone
---

# account.confirmPhone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5f2178c3`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_code_hash` | `string` | | 
| `phone_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ConfirmPhoneRequest{
    phone_code_hash: "",
    phone_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
