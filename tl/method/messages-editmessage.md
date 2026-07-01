---
title: EditMessage
description: TL method messages.editMessage
---

# messages.editMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb106e66c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_webpage` | `bool` *(flags.1, optional)* | | 
| `invert_media` | `bool` *(flags.16, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `message` | `string` *(flags.11, optional)* | | 
| `media` | `InputMedia` *(flags.14, optional)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.3, optional)* | | 
| `schedule_date` | `int32` *(flags.15, optional)* | | 
| `schedule_repeat_period` | `int32` *(flags.18, optional)* | | 
| `quick_reply_shortcut_id` | `int32` *(flags.17, optional)* | | 
| `rich_message` | `InputRichMessage` *(flags.23, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditMessageRequest{
    no_webpage: false,
    invert_media: false,
    peer: nil, // InputPeer
    id: 0,
    message: "",
    media: nil, // InputMedia
    reply_markup: nil, // ReplyMarkup
    entities: nil,
    schedule_date: 0,
    schedule_repeat_period: 0,
    quick_reply_shortcut_id: 0,
    rich_message: nil, // InputRichMessage
})
if err != nil {
    panic(err)
}
print(result)
```
