---
title: FinishPasskeyLogin
description: TL method auth.finishPasskeyLogin
---

# auth.finishPasskeyLogin

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9857ad07`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `credential` | `InputPasskeyCredential` | | 
| `from_dc_id` | `int32` *(flags.0, optional)* | | 
| `from_auth_key_id` | `int64` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.FinishPasskeyLoginRequest{
    credential: nil, // InputPasskeyCredential
    from_dc_id: 0,
    from_auth_key_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
