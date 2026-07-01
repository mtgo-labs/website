---
title: PhoneConnectionWebrtc
description: TL constructor phoneConnectionWebrtc
---

# PhoneConnectionWebrtc

<span class="layer-badge">Layer 227</span>

TL name: `phoneConnectionWebrtc`  
Constructor ID: `0x635fe375`  
Returns: [PhoneConnection](/tl/types#phoneconnection)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `turn` | `bool` *(flags.0)* | | 
| `stun` | `bool` *(flags.1)* | | 
| `id` | `int64` | | 
| `ip` | `string` | | 
| `ipv6` | `string` | | 
| `port` | `int32` | | 
| `username` | `string` | | 
| `password` | `string` | | 
