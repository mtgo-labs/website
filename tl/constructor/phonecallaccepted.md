---
title: PhoneCallAccepted
description: TL constructor phoneCallAccepted
---

# PhoneCallAccepted

<span class="layer-badge">Layer 227</span>

TL name: `phoneCallAccepted`  
Constructor ID: `0x3660c311`  
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
| `g_b` | `[]byte` | | 
| `protocol` | `PhoneCallProtocol` | | 
