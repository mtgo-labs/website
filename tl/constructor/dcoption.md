---
title: DCOption
description: TL constructor dcOption
---

# DCOption

<span class="layer-badge">Layer 225</span>

TL name: `dcOption`  
Constructor ID: `0x18b7a10d`  
Returns: [DCOption](/tl/types#dcoption)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `ipv6` | `bool` *(flags.0)* | | 
| `media_only` | `bool` *(flags.1)* | | 
| `tcpo_only` | `bool` *(flags.2)* | | 
| `cdn` | `bool` *(flags.3)* | | 
| `static` | `bool` *(flags.4)* | | 
| `this_port_only` | `bool` *(flags.5)* | | 
| `id` | `int32` | | 
| `ip_address` | `string` | | 
| `port` | `int32` | | 
| `secret` | `[]byte` *(flags.10)* | | 
