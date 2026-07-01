---
title: ChangePhone
description: TL method account.changePhone
---

# account.changePhone

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x70c32edb`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `phone_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ChangePhoneRequest{
    phone_number: "",
    phone_code_hash: "",
    phone_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
