---
title: GetSuggestedDialogFilters
description: TL method messages.getSuggestedDialogFilters
---

# messages.getSuggestedDialogFilters

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa29cd42c`  
Returns: [DialogFilterSuggested](/tl/types#dialogfiltersuggested)

## Example

```go
result, err := client.Raw(&tg.GetSuggestedDialogFiltersRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
