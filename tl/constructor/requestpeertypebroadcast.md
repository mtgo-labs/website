---
title: RequestPeerTypeBroadcast
description: TL constructor requestPeerTypeBroadcast
---

# RequestPeerTypeBroadcast

<span class="layer-badge">Layer 227</span>

TL name: `requestPeerTypeBroadcast`  
Constructor ID: `0x339bef6c`  
Returns: [RequestPeerType](/tl/types#requestpeertype)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `has_username` | `bool` *(flags.3)* | | 
| `user_admin_rights` | `ChatAdminRights` *(flags.1)* | | 
| `bot_admin_rights` | `ChatAdminRights` *(flags.2)* | | 
