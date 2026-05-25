---
title: ResetWebAuthorizations
description: TL method account.resetWebAuthorizations
---

# account.resetWebAuthorizations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x682d2594`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResetWebAuthorizationsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
