---
title: InputBotInlineResultDocument
description: TL constructor inputBotInlineResultDocument
---

# InputBotInlineResultDocument

<span class="layer-badge">Layer 225</span>

TL name: `inputBotInlineResultDocument`  
Constructor ID: `0xfff8fdc4`  
Returns: [InputBotInlineResult](/tl/types#inputbotinlineresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `string` | | 
| `type` | `string` | | 
| `title` | `string` *(flags.1)* | | 
| `description` | `string` *(flags.2)* | | 
| `document` | `InputDocument` | | 
| `send_message` | `InputBotInlineMessage` | | 
