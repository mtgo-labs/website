---
title: PhoneCall
description: TL constructor phoneCall
---

# PhoneCall

<span class="layer-badge">Layer 227</span>

TL name: `phoneCall`  
Constructor ID: `0x30535af5`  
Returns: [PhoneCall](/tl/types#phonecall)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `p2p_allowed` | `bool` *(flags.5)* | | 
| `video` | `bool` *(flags.6)* | | 
| `conference_supported` | `bool` *(flags.8)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `date` | `int32` | | 
| `admin_id` | `int64` | | 
| `participant_id` | `int64` | | 
| `g_a_or_b` | `[]byte` | | 
| `key_fingerprint` | `int64` | | 
| `protocol` | `PhoneCallProtocol` | | 
| `connections` | `[]PhoneConnection` | | 
| `start_date` | `int32` | | 
| `custom_parameters` | `DataJSON` *(flags.7)* | | 
