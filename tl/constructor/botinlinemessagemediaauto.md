---
title: BotInlineMessageMediaAuto
description: TL constructor botInlineMessageMediaAuto
---

# BotInlineMessageMediaAuto

<span class="layer-badge">Layer 227</span>

TL name: `botInlineMessageMediaAuto`  
Constructor ID: `0x764cf810`  
Returns: [BotInlineMessage](/tl/types#botinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `invert_media` | `bool` *(flags.3)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
