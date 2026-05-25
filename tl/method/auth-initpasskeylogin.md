---
title: InitPasskeyLogin
description: TL method auth.initPasskeyLogin
---

# auth.initPasskeyLogin

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x518ad0b7`  
Returns: [PasskeyLoginOptions](/tl/types#passkeyloginoptions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `api_id` | `int32` | | 
| `api_hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.InitPasskeyLoginRequest{
    api_id: 0,
    api_hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
