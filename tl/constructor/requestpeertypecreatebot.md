---
title: RequestPeerTypeCreateBot
description: TL constructor requestPeerTypeCreateBot
---

# RequestPeerTypeCreateBot

<span class="layer-badge">Layer 225</span>

TL name: `requestPeerTypeCreateBot`  
Constructor ID: `0x3e81e078`  
Returns: [RequestPeerType](/tl/types#requestpeertype)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `bot_managed` | `bool` *(flags.0)* | | 
| `suggested_name` | `string` *(flags.1)* | | 
| `suggested_username` | `string` *(flags.2)* | | 
