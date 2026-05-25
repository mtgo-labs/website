---
title: GetStarsTopupOptions
description: TL method payments.getStarsTopupOptions
---

# payments.getStarsTopupOptions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc00ec7d3`  
Returns: [StarsTopupOption](/tl/types#starstopupoption)

## Example

```go
result, err := client.Raw(&tg.GetStarsTopupOptionsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
