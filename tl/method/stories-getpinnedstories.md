---
title: GetPinnedStories
description: TL method stories.getPinnedStories
---

# stories.getPinnedStories

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5821a5dc`  
Returns: [Stories](/tl/types#stories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `offset_id` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPinnedStoriesRequest{
    peer: nil, // InputPeer
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
