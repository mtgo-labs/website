---
title: GetState
description: TL method updates.getState
---

# updates.getState

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xedd4882a`  
Returns: [State](/tl/types#state)

## Example

```go
result, err := client.Raw(&tg.GetStateRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
