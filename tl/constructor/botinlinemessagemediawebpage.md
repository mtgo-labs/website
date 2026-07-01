---
title: BotInlineMessageMediaWebPage
description: TL constructor botInlineMessageMediaWebPage
---

# BotInlineMessageMediaWebPage

<span class="layer-badge">Layer 227</span>

TL name: `botInlineMessageMediaWebPage`  
Constructor ID: `0x809ad9a6`  
Returns: [BotInlineMessage](/tl/types#botinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `force_large_media` | `bool` *(flags.4)* | | 
| `force_small_media` | `bool` *(flags.5)* | | 
| `manual` | `bool` *(flags.7)* | | 
| `safe` | `bool` *(flags.8)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `url` | `string` | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
