---
title: ChangeAuthorizationSettings
description: TL method account.changeAuthorizationSettings
---

# account.changeAuthorizationSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x40f48462`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `confirmed` | `bool` *(flags.3, optional)* | | 
| `hash` | `int64` | | 
| `encrypted_requests_disabled` | `bool` *(flags.0, optional)* | | 
| `call_requests_disabled` | `bool` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ChangeAuthorizationSettingsRequest{
    confirmed: false,
    hash: 0,
    encrypted_requests_disabled: false,
    call_requests_disabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
