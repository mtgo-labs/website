---
title: Join
description: TL method smsjobs.join
---

# smsjobs.join

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa74ece2d`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.JoinRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
