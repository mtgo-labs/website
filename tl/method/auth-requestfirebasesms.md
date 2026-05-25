---
title: RequestFirebaseSms
description: TL method auth.requestFirebaseSms
---

# auth.requestFirebaseSms

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8e39261e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `safety_net_token` | `string` *(flags.0, optional)* | | 
| `play_integrity_token` | `string` *(flags.2, optional)* | | 
| `ios_push_secret` | `string` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.RequestFirebaseSmsRequest{
    phone_number: "",
    phone_code_hash: "",
    safety_net_token: "",
    play_integrity_token: "",
    ios_push_secret: "",
})
if err != nil {
    panic(err)
}
print(result)
```
