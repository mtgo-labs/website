---
title: GetDialogFilters
description: TL method messages.getDialogFilters
---

# messages.getDialogFilters

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xefd48c89`  
Returns: [DialogFilters](/tl/types#dialogfilters)

## Example

```go
result, err := client.Raw(&tg.GetDialogFiltersRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
