---
title: InputBotInlineMessageMediaAuto
description: TL constructor inputBotInlineMessageMediaAuto
---

# InputBotInlineMessageMediaAuto

<span class="layer-badge">Layer 225</span>

TL name: `inputBotInlineMessageMediaAuto`  
Constructor ID: `0x3380c786`  
Returns: [InputBotInlineMessage](/tl/types#inputbotinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
