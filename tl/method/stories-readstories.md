---
title: ReadStories
description: TL method stories.readStories
---

# stories.readStories

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa556dac8`  
Returns: [Int](/tl/types#int)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadStoriesRequest{
    peer: nil, // InputPeer
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
