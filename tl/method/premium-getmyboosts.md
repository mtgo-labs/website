---
title: GetMyBoosts
description: TL method premium.getMyBoosts
---

# premium.getMyBoosts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0be77b4a`  
Returns: [MyBoosts](/tl/types#myboosts)

## Example

```go
result, err := client.Raw(&tg.GetMyBoostsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
