---
title: GetWebAuthorizations
description: TL method account.getWebAuthorizations
---

# account.getWebAuthorizations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x182e6d6f`  
Returns: [WebAuthorizations](/tl/types#webauthorizations)

## Example

```go
result, err := client.Raw(&tg.GetWebAuthorizationsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
