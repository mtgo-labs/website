---
title: ReorderPinnedForumTopics
description: TL method messages.reorderPinnedForumTopics
---

# messages.reorderPinnedForumTopics

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0e7841f0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `force` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `order` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderPinnedForumTopicsRequest{
    force: false,
    peer: nil, // InputPeer
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
