---
title: IncrementStoryViews
description: TL method stories.incrementStoryViews
---

# stories.incrementStoryViews

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb2028afb`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.IncrementStoryViewsRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
