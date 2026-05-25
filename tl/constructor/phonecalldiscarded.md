---
title: PhoneCallDiscarded
description: TL constructor phoneCallDiscarded
---

# PhoneCallDiscarded

<span class="layer-badge">Layer 225</span>

TL name: `phoneCallDiscarded`  
Constructor ID: `0x50ca4de1`  
Returns: [PhoneCall](/tl/types#phonecall)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `need_rating` | `bool` *(flags.2)* | | 
| `need_debug` | `bool` *(flags.3)* | | 
| `video` | `bool` *(flags.6)* | | 
| `id` | `int64` | | 
| `reason` | `PhoneCallDiscardReason` *(flags.0)* | | 
| `duration` | `int32` *(flags.1)* | | 
