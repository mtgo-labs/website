---
title: ResetAuthorization
description: TL method account.resetAuthorization
---

# account.resetAuthorization

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdf77f3bc`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.ResetAuthorizationRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
