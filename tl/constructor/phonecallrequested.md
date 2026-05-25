---
title: PhoneCallRequested
description: TL constructor phoneCallRequested
---

# PhoneCallRequested

<span class="layer-badge">Layer 225</span>

TL name: `phoneCallRequested`  
Constructor ID: `0x14b0ed0c`  
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
| `g_a_hash` | `[]byte` | | 
| `protocol` | `PhoneCallProtocol` | | 
