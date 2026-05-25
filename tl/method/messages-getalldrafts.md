---
title: GetAllDrafts
description: TL method messages.getAllDrafts
---

# messages.getAllDrafts

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6a3f8d65`  
Returns: [Updates](/tl/types#updates)

## Example

```go
result, err := client.Raw(&tg.GetAllDraftsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
