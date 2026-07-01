---
title: PhoneCallProtocol
description: TL constructor phoneCallProtocol
---

# PhoneCallProtocol

<span class="layer-badge">Layer 227</span>

TL name: `phoneCallProtocol`  
Constructor ID: `0xfc878fc8`  
Returns: [PhoneCallProtocol](/tl/types#phonecallprotocol)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `udp_p2p` | `bool` *(flags.0)* | | 
| `udp_reflector` | `bool` *(flags.1)* | | 
| `min_layer` | `int32` | | 
| `max_layer` | `int32` | | 
| `library_versions` | `[]string` | | 
