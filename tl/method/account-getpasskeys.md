---
title: GetPasskeys
description: TL method account.getPasskeys
---

# account.getPasskeys

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xea1f0c52`  
Returns: [Passkeys](/tl/types#passkeys)

## Example

```go
result, err := client.Raw(&tg.GetPasskeysRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
