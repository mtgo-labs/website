---
title: InputMediaGeoLive
description: TL constructor inputMediaGeoLive
---

# InputMediaGeoLive

<span class="layer-badge">Layer 227</span>

TL name: `inputMediaGeoLive`  
Constructor ID: `0x971fa843`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `stopped` | `bool` *(flags.0)* | | 
| `geo_point` | `InputGeoPoint` | | 
| `heading` | `int32` *(flags.2)* | | 
| `period` | `int32` *(flags.1)* | | 
| `proximity_notification_radius` | `int32` *(flags.3)* | | 
