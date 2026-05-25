---
title: Status
description: TL constructor smsjobs.status
---

# Status

<span class="layer-badge">Layer 225</span>

TL name: `smsjobs.status`  
Constructor ID: `0x2aee9191`  
Returns: [Status](/tl/types#status)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `allow_international` | `bool` *(flags.0)* | | 
| `recent_sent` | `int32` | | 
| `recent_since` | `int32` | | 
| `recent_remains` | `int32` | | 
| `total_sent` | `int32` | | 
| `total_since` | `int32` | | 
| `last_gift_slug` | `string` *(flags.1)* | | 
| `terms_url` | `string` | | 
