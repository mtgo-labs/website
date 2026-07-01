---
title: CancelPasswordEmail
description: TL method account.cancelPasswordEmail
---

# account.cancelPasswordEmail

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc1cbd5b6`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.CancelPasswordEmailRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
