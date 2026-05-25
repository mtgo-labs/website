---
title: GetSaved
description: TL method contacts.getSaved
---

# contacts.getSaved

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x82f1e39f`  
Returns: [SavedContact](/tl/types#savedcontact)

## Example

```go
result, err := client.Raw(&tg.GetSavedRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
