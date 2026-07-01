---
title: BotCallbackAnswer
description: TL constructor messages.botCallbackAnswer
---

# BotCallbackAnswer

<span class="layer-badge">Layer 227</span>

TL name: `messages.botCallbackAnswer`  
Constructor ID: `0x36585ea4`  
Returns: [BotCallbackAnswer](/tl/types#botcallbackanswer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `alert` | `bool` *(flags.1)* | | 
| `has_url` | `bool` *(flags.3)* | | 
| `native_ui` | `bool` *(flags.4)* | | 
| `message` | `string` *(flags.0)* | | 
| `url` | `string` *(flags.2)* | | 
| `cache_time` | `int32` | | 
