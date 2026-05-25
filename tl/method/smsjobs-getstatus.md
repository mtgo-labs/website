---
title: GetStatus
description: TL method smsjobs.getStatus
---

# smsjobs.getStatus

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x10a698e8`  
Returns: [Status](/tl/types#status)

## Example

```go
result, err := client.Raw(&tg.GetStatusRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
