---
title: GetSavedInfo
description: TL method payments.getSavedInfo
---

# payments.getSavedInfo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x227d824b`  
Returns: [SavedInfo](/tl/types#savedinfo)

## Example

```go
result, err := client.Raw(&tg.GetSavedInfoRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
