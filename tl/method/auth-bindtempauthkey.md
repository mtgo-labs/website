---
title: BindTempAuthKey
description: TL method auth.bindTempAuthKey
---

# auth.bindTempAuthKey

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xcdd42a05`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `perm_auth_key_id` | `int64` | | 
| `nonce` | `int64` | | 
| `expires_at` | `int32` | | 
| `encrypted_message` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.BindTempAuthKeyRequest{
    perm_auth_key_id: 0,
    nonce: 0,
    expires_at: 0,
    encrypted_message: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
