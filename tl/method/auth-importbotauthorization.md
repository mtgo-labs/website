---
title: ImportBotAuthorization
description: TL method auth.importBotAuthorization
---

# auth.importBotAuthorization

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x67a3ff2c`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `flags` | `int32` | | 
| `api_id` | `int32` | | 
| `api_hash` | `string` | | 
| `bot_auth_token` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ImportBotAuthorizationRequest{
    flags: 0,
    api_id: 0,
    api_hash: "",
    bot_auth_token: "",
})
if err != nil {
    panic(err)
}
print(result)
```
