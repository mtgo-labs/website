---
title: ToggleDialogFilterTags
description: TL method messages.toggleDialogFilterTags
---

# messages.toggleDialogFilterTags

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfd2dda49`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleDialogFilterTagsRequest{
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
