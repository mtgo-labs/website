---
title: ImportWebTokenAuthorization
description: TL method auth.importWebTokenAuthorization
---

# auth.importWebTokenAuthorization

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2db873a9`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `api_id` | `int32` | | 
| `api_hash` | `string` | | 
| `web_auth_token` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ImportWebTokenAuthorizationRequest{
    api_id: 0,
    api_hash: "",
    web_auth_token: "",
})
if err != nil {
    panic(err)
}
print(result)
```
