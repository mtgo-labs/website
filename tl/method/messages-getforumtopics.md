---
title: GetForumTopics
description: TL method messages.getForumTopics
---

# messages.getForumTopics

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3ba47bff`  
Returns: [ForumTopics](/tl/types#forumtopics)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `q` | `string` *(flags.0, optional)* | | 
| `offset_date` | `int32` | | 
| `offset_id` | `int32` | | 
| `offset_topic` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetForumTopicsRequest{
    peer: nil, // InputPeer
    q: "",
    offset_date: 0,
    offset_id: 0,
    offset_topic: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
