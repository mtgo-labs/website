---
title: BotInlineMediaResult
description: TL constructor botInlineMediaResult
---

# BotInlineMediaResult

<span class="layer-badge">Layer 225</span>

TL name: `botInlineMediaResult`  
Constructor ID: `0x17db940b`  
Returns: [BotInlineResult](/tl/types#botinlineresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `string` | | 
| `type` | `string` | | 
| `photo` | `Photo` *(flags.0)* | | 
| `document` | `Document` *(flags.1)* | | 
| `title` | `string` *(flags.2)* | | 
| `description` | `string` *(flags.3)* | | 
| `send_message` | `BotInlineMessage` | | 
