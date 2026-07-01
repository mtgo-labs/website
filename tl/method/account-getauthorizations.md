---
title: GetAuthorizations
description: TL method account.getAuthorizations
---

# account.getAuthorizations

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe320c158`  
Returns: [Authorizations](/tl/types#authorizations)

## Example

```go
result, err := client.Raw(&tg.GetAuthorizationsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
