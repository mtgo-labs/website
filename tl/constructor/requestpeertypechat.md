---
title: RequestPeerTypeChat
description: TL constructor requestPeerTypeChat
---

# RequestPeerTypeChat

<span class="layer-badge">Layer 227</span>

TL name: `requestPeerTypeChat`  
Constructor ID: `0xc9f06e1b`  
Returns: [RequestPeerType](/tl/types#requestpeertype)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `bot_participant` | `bool` *(flags.5)* | | 
| `has_username` | `bool` *(flags.3)* | | 
| `forum` | `bool` *(flags.4)* | | 
| `user_admin_rights` | `ChatAdminRights` *(flags.1)* | | 
| `bot_admin_rights` | `ChatAdminRights` *(flags.2)* | | 
