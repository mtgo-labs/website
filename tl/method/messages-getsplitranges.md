---
title: GetSplitRanges
description: TL method messages.getSplitRanges
---

# messages.getSplitRanges

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1cff7e08`  
Returns: [MessageRange](/tl/types#messagerange)

## Example

```go
result, err := client.Raw(&tg.GetSplitRangesRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
