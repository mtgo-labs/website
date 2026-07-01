---
title: RequestPasswordRecovery
description: TL method auth.requestPasswordRecovery
---

# auth.requestPasswordRecovery

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd897bc66`  
Returns: [PasswordRecovery](/tl/types#passwordrecovery)

## Example

```go
result, err := client.Raw(&tg.RequestPasswordRecoveryRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
