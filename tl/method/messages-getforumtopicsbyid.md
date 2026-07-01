---
title: GetForumTopicsByID
description: TL method messages.getForumTopicsByID
---

# messages.getForumTopicsByID

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xaf0a4a08`  
Returns: [ForumTopics](/tl/types#forumtopics)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `topics` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetForumTopicsByIDRequest{
    peer: nil, // InputPeer
    topics: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
