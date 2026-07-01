---
title: ChannelForbidden
description: TL constructor channelForbidden
---

# ChannelForbidden

<span class="layer-badge">Layer 227</span>

TL name: `channelForbidden`  
Constructor ID: `0x17d493d5`  
Returns: [Chat](/tl/types#chat)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `broadcast` | `bool` *(flags.5)* | | 
| `megagroup` | `bool` *(flags.8)* | | 
| `monoforum` | `bool` *(flags.10)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `title` | `string` | | 
| `until_date` | `int32` *(flags.16)* | | 
