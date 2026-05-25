---
title: UpdatePinnedForumTopic
description: TL method messages.updatePinnedForumTopic
---

# messages.updatePinnedForumTopic

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x175df251`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `topic_id` | `int32` | | 
| `pinned` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.UpdatePinnedForumTopicRequest{
    peer: nil, // InputPeer
    topic_id: 0,
    pinned: false,
})
if err != nil {
    panic(err)
}
print(result)
```
