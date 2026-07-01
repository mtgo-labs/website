---
title: ResetSaved
description: TL method contacts.resetSaved
---

# contacts.resetSaved

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x879537f1`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResetSavedRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
