---
title: UpdatePasswordSettings
description: TL method account.updatePasswordSettings
---

# account.updatePasswordSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa59b102f`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `password` | `InputCheckPasswordSRP` | | 
| `new_settings` | `Account.passwordInputSettings` | | 

## Example

```go
result, err := client.Raw(&tg.UpdatePasswordSettingsRequest{
    password: nil, // InputCheckPasswordSRP
    new_settings: nil, // Account.passwordInputSettings
})
if err != nil {
    panic(err)
}
print(result)
```
