---
title: BotInlineMessageText
description: TL constructor botInlineMessageText
---

# BotInlineMessageText

<span class="layer-badge">Layer 225</span>

TL name: `botInlineMessageText`  
Constructor ID: `0x8c7f65e2`  
Returns: [BotInlineMessage](/tl/types#botinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `no_webpage` | `bool` *(flags.0)* | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
