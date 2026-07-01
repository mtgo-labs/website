---
title: GetNearestDC
description: TL method help.getNearestDc
---

# help.getNearestDc

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1fb33026`  
Returns: [NearestDC](/tl/types#nearestdc)

## Example

```go
result, err := client.Raw(&tg.GetNearestDCRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
