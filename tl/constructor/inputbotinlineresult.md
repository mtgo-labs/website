---
title: InputBotInlineResult
description: TL constructor inputBotInlineResult
---

# InputBotInlineResult

<span class="layer-badge">Layer 227</span>

TL name: `inputBotInlineResult`  
Constructor ID: `0x88bf9319`  
Returns: [InputBotInlineResult](/tl/types#inputbotinlineresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `string` | | 
| `type` | `string` | | 
| `title` | `string` *(flags.1)* | | 
| `description` | `string` *(flags.2)* | | 
| `url` | `string` *(flags.3)* | | 
| `thumb` | `InputWebDocument` *(flags.4)* | | 
| `content` | `InputWebDocument` *(flags.5)* | | 
| `send_message` | `InputBotInlineMessage` | | 
