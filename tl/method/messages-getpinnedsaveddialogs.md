---
title: GetPinnedSavedDialogs
description: TL method messages.getPinnedSavedDialogs
---

# messages.getPinnedSavedDialogs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd63d94e0`  
Returns: [SavedDialogs](/tl/types#saveddialogs)

## Example

```go
result, err := client.Raw(&tg.GetPinnedSavedDialogsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
