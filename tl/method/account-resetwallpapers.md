---
title: ResetWallPapers
description: TL method account.resetWallPapers
---

# account.resetWallPapers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbb3b9804`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResetWallPapersRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
