---
title: MessageMediaGeoLive
description: TL constructor messageMediaGeoLive
---

# MessageMediaGeoLive

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaGeoLive`  
Constructor ID: `0xb940c666`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `geo` | `GeoPoint` | | 
| `heading` | `int32` *(flags.0)* | | 
| `period` | `int32` | | 
| `proximity_notification_radius` | `int32` *(flags.1)* | | 
