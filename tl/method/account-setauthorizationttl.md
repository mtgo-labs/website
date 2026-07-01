---
title: SetAuthorizationTTL
description: TL method account.setAuthorizationTTL
---

# account.setAuthorizationTTL

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbf899aa0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `authorization_ttl_days` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetAuthorizationTTLRequest{
    authorization_ttl_days: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
