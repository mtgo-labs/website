---
title: GetAllSecureValues
description: TL method account.getAllSecureValues
---

# account.getAllSecureValues

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb288bc7d`  
Returns: [SecureValue](/tl/types#securevalue)

## Example

```go
result, err := client.Raw(&tg.GetAllSecureValuesRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
