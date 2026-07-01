---
title: ResendPasswordEmail
description: TL method account.resendPasswordEmail
---

# account.resendPasswordEmail

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7a7f2a15`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResendPasswordEmailRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
