---
title: EditInlineBotMessage
description: TL method messages.editInlineBotMessage
---

# messages.editInlineBotMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa423bb51`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_webpage` | `bool` *(flags.1, optional)* | | 
| `invert_media` | `bool` *(flags.16, optional)* | | 
| `id` | `InputBotInlineMessageID` | | 
| `message` | `string` *(flags.11, optional)* | | 
| `media` | `InputMedia` *(flags.14, optional)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.3, optional)* | | 
| `rich_message` | `InputRichMessage` *(flags.23, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditInlineBotMessageRequest{
    no_webpage: false,
    invert_media: false,
    id: nil, // InputBotInlineMessageID
    message: "",
    media: nil, // InputMedia
    reply_markup: nil, // ReplyMarkup
    entities: nil,
    rich_message: nil, // InputRichMessage
})
if err != nil {
    panic(err)
}
print(result)
```
