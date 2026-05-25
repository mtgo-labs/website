---
title: Leave
description: TL method smsjobs.leave
---

# smsjobs.leave

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9898ad73`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.LeaveRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
