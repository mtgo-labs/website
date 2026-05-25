---
title: ClearAllDrafts
description: TL method messages.clearAllDrafts
---

# messages.clearAllDrafts

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7e58ee9c`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ClearAllDraftsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
