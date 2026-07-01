---
title: CreateForumTopic
description: TL method messages.createForumTopic
---

# messages.createForumTopic

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2f98c3d5`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `title_missing` | `bool` *(flags.4, optional)* | | 
| `peer` | `InputPeer` | | 
| `title` | `string` | | 
| `icon_color` | `int32` *(flags.0, optional)* | | 
| `icon_emoji_id` | `int64` *(flags.3, optional)* | | 
| `random_id` | `int64` | | 
| `send_as` | `InputPeer` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateForumTopicRequest{
    title_missing: false,
    peer: nil, // InputPeer
    title: "",
    icon_color: 0,
    icon_emoji_id: 0,
    random_id: 0,
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
