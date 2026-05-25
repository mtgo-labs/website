---
title: ForwardMessages
description: TL method messages.forwardMessages
---

# messages.forwardMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x13704a7c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.5, optional)* | | 
| `background` | `bool` *(flags.6, optional)* | | 
| `with_my_score` | `bool` *(flags.8, optional)* | | 
| `drop_author` | `bool` *(flags.11, optional)* | | 
| `drop_media_captions` | `bool` *(flags.12, optional)* | | 
| `noforwards` | `bool` *(flags.14, optional)* | | 
| `allow_paid_floodskip` | `bool` *(flags.19, optional)* | | 
| `from_peer` | `InputPeer` | | 
| `id` | `[]int32` | | 
| `random_id` | `[]int64` | | 
| `to_peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.9, optional)* | | 
| `reply_to` | `InputReplyTo` *(flags.22, optional)* | | 
| `schedule_date` | `int32` *(flags.10, optional)* | | 
| `schedule_repeat_period` | `int32` *(flags.24, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 
| `quick_reply_shortcut` | `InputQuickReplyShortcut` *(flags.17, optional)* | | 
| `effect` | `int64` *(flags.18, optional)* | | 
| `video_timestamp` | `int32` *(flags.20, optional)* | | 
| `allow_paid_stars` | `int64` *(flags.21, optional)* | | 
| `suggested_post` | `SuggestedPost` *(flags.23, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ForwardMessagesRequest{
    silent: false,
    background: false,
    with_my_score: false,
    drop_author: false,
    drop_media_captions: false,
    noforwards: false,
    allow_paid_floodskip: false,
    from_peer: nil, // InputPeer
    id: nil,
    random_id: nil,
    to_peer: nil, // InputPeer
    top_msg_id: 0,
    reply_to: nil, // InputReplyTo
    schedule_date: 0,
    schedule_repeat_period: 0,
    send_as: nil, // InputPeer
    quick_reply_shortcut: nil, // InputQuickReplyShortcut
    effect: 0,
    video_timestamp: 0,
    allow_paid_stars: 0,
    suggested_post: nil, // SuggestedPost
})
if err != nil {
    panic(err)
}
print(result)
```
