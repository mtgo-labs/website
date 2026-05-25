---
title: RecoverPassword
description: TL method auth.recoverPassword
---

# auth.recoverPassword

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x37096c70`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `code` | `string` | | 
| `new_settings` | `Account.passwordInputSettings` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.RecoverPasswordRequest{
    code: "",
    new_settings: nil, // Account.passwordInputSettings
})
if err != nil {
    panic(err)
}
print(result)
```
