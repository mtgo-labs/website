---
title: BotInlineMessageMediaGeo
description: TL constructor botInlineMessageMediaGeo
---

# BotInlineMessageMediaGeo

<span class="layer-badge">Layer 225</span>

TL name: `botInlineMessageMediaGeo`  
Constructor ID: `0x051846fd`  
Returns: [BotInlineMessage](/tl/types#botinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `geo` | `GeoPoint` | | 
| `heading` | `int32` *(flags.0)* | | 
| `period` | `int32` *(flags.1)* | | 
| `proximity_notification_radius` | `int32` *(flags.3)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
