---
title: DeleteStories
description: TL method stories.deleteStories
---

# stories.deleteStories

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xae59db5f`  
Returns: [Int](/tl/types#int)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteStoriesRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
