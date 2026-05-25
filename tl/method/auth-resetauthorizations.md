---
title: ResetAuthorizations
description: TL method auth.resetAuthorizations
---

# auth.resetAuthorizations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9fab0d1a`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResetAuthorizationsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
