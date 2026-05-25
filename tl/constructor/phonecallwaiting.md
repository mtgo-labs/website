---
title: PhoneCallWaiting
description: TL constructor phoneCallWaiting
---

# PhoneCallWaiting

<span class="layer-badge">Layer 225</span>

TL name: `phoneCallWaiting`  
Constructor ID: `0xc5226f17`  
Returns: [PhoneCall](/tl/types#phonecall)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `video` | `bool` *(flags.6)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `date` | `int32` | | 
| `admin_id` | `int64` | | 
| `participant_id` | `int64` | | 
| `protocol` | `PhoneCallProtocol` | | 
| `receive_date` | `int32` *(flags.0)* | | 
