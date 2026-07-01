---
title: EditForumTopic
description: TL method messages.editForumTopic
---

# messages.editForumTopic

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xcecc1134`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `topic_id` | `int32` | | 
| `title` | `string` *(flags.0, optional)* | | 
| `icon_emoji_id` | `int64` *(flags.1, optional)* | | 
| `closed` | `bool` *(flags.2, optional)* | | 
| `hidden` | `bool` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditForumTopicRequest{
    peer: nil, // InputPeer
    topic_id: 0,
    title: "",
    icon_emoji_id: 0,
    closed: false,
    hidden: false,
})
if err != nil {
    panic(err)
}
print(result)
```
