---
title: GetStoriesArchive
description: TL method stories.getStoriesArchive
---

# stories.getStoriesArchive

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb4352016`  
Returns: [Stories](/tl/types#stories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `offset_id` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoriesArchiveRequest{
    peer: nil, // InputPeer
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
