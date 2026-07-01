---
title: DeclinePasswordReset
description: TL method account.declinePasswordReset
---

# account.declinePasswordReset

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4c9409f6`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.DeclinePasswordResetRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
