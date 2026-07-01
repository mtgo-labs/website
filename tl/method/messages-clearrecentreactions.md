---
title: ClearRecentReactions
description: TL method messages.clearRecentReactions
---

# messages.clearRecentReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9dfeefb4`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ClearRecentReactionsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
