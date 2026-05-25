---
title: ResetPassword
description: TL method account.resetPassword
---

# account.resetPassword

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9308ce1b`  
Returns: [ResetPasswordResult](/tl/types#resetpasswordresult)

## Example

```go
result, err := client.Raw(&tg.ResetPasswordRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
