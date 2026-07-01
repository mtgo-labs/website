---
title: InputBotInlineMessageText
description: TL constructor inputBotInlineMessageText
---

# InputBotInlineMessageText

<span class="layer-badge">Layer 227</span>

TL name: `inputBotInlineMessageText`  
Constructor ID: `0x3dcd7a87`  
Returns: [InputBotInlineMessage](/tl/types#inputbotinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `no_webpage` | `bool` *(flags.0)* | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
