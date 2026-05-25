---
title: InputBotInlineMessageMediaWebPage
description: TL constructor inputBotInlineMessageMediaWebPage
---

# InputBotInlineMessageMediaWebPage

<span class="layer-badge">Layer 225</span>

TL name: `inputBotInlineMessageMediaWebPage`  
Constructor ID: `0xbddcc510`  
Returns: [InputBotInlineMessage](/tl/types#inputbotinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `force_large_media` | `bool` *(flags.4)* | | 
| `force_small_media` | `bool` *(flags.5)* | | 
| `optional` | `bool` *(flags.6)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `url` | `string` | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
