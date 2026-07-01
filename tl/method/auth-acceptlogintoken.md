---
title: AcceptLoginToken
description: TL method auth.acceptLoginToken
---

# auth.acceptLoginToken

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe894ad4d`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptLoginTokenRequest{
    token: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
