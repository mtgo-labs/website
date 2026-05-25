---
title: ResetWebAuthorization
description: TL method account.resetWebAuthorization
---

# account.resetWebAuthorization

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2d01b9ef`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.ResetWebAuthorizationRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
