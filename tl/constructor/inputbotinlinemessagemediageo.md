---
title: InputBotInlineMessageMediaGeo
description: TL constructor inputBotInlineMessageMediaGeo
---

# InputBotInlineMessageMediaGeo

<span class="layer-badge">Layer 225</span>

TL name: `inputBotInlineMessageMediaGeo`  
Constructor ID: `0x96929a85`  
Returns: [InputBotInlineMessage](/tl/types#inputbotinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `geo_point` | `InputGeoPoint` | | 
| `heading` | `int32` *(flags.0)* | | 
| `period` | `int32` *(flags.1)* | | 
| `proximity_notification_radius` | `int32` *(flags.3)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
