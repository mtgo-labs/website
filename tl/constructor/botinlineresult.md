---
title: BotInlineResult
description: TL constructor botInlineResult
---

# BotInlineResult

<span class="layer-badge">Layer 227</span>

TL name: `botInlineResult`  
Constructor ID: `0x11965f3a`  
Returns: [BotInlineResult](/tl/types#botinlineresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `string` | | 
| `type` | `string` | | 
| `title` | `string` *(flags.1)* | | 
| `description` | `string` *(flags.2)* | | 
| `url` | `string` *(flags.3)* | | 
| `thumb` | `WebDocument` *(flags.4)* | | 
| `content` | `WebDocument` *(flags.5)* | | 
| `send_message` | `BotInlineMessage` | | 
