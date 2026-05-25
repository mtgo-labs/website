---
title: GetPassword
description: TL method account.getPassword
---

# account.getPassword

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x548a30f5`  
Returns: [Password](/tl/types#password)

## Example

```go
result, err := client.Raw(&tg.GetPasswordRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
