---
title: SendMessage
description: TL method messages.sendMessage
---

# messages.sendMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfef48f62`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_webpage` | `bool` *(flags.1, optional)* | | 
| `silent` | `bool` *(flags.5, optional)* | | 
| `background` | `bool` *(flags.6, optional)* | | 
| `clear_draft` | `bool` *(flags.7, optional)* | | 
| `noforwards` | `bool` *(flags.14, optional)* | | 
| `update_stickersets_order` | `bool` *(flags.15, optional)* | | 
| `invert_media` | `bool` *(flags.16, optional)* | | 
| `allow_paid_floodskip` | `bool` *(flags.19, optional)* | | 
| `peer` | `InputPeer` | | 
| `reply_to` | `InputReplyTo` *(flags.0, optional)* | | 
| `message` | `string` | | 
| `random_id` | `int64` | | 
| `reply_markup` | `ReplyMarkup` *(flags.2, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.3, optional)* | | 
| `schedule_date` | `int32` *(flags.10, optional)* | | 
| `schedule_repeat_period` | `int32` *(flags.24, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 
| `quick_reply_shortcut` | `InputQuickReplyShortcut` *(flags.17, optional)* | | 
| `effect` | `int64` *(flags.18, optional)* | | 
| `allow_paid_stars` | `int64` *(flags.21, optional)* | | 
| `suggested_post` | `SuggestedPost` *(flags.22, optional)* | | 
| `rich_message` | `InputRichMessage` *(flags.23, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendMessageRequest{
    no_webpage: false,
    silent: false,
    background: false,
    clear_draft: false,
    noforwards: false,
    update_stickersets_order: false,
    invert_media: false,
    allow_paid_floodskip: false,
    peer: nil, // InputPeer
    reply_to: nil, // InputReplyTo
    message: "",
    random_id: 0,
    reply_markup: nil, // ReplyMarkup
    entities: nil,
    schedule_date: 0,
    schedule_repeat_period: 0,
    send_as: nil, // InputPeer
    quick_reply_shortcut: nil, // InputQuickReplyShortcut
    effect: 0,
    allow_paid_stars: 0,
    suggested_post: nil, // SuggestedPost
    rich_message: nil, // InputRichMessage
})
if err != nil {
    panic(err)
}
print(result)
```
