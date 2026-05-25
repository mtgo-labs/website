---
title: GetStoriesViews
description: TL method stories.getStoriesViews
---

# stories.getStoriesViews

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x28e16cc8`  
Returns: [StoryViews](/tl/types#storyviews)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoriesViewsRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
