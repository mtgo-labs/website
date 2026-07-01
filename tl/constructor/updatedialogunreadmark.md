---
title: UpdateDialogUnreadMark
description: TL constructor updateDialogUnreadMark
---

# UpdateDialogUnreadMark

<span class="layer-badge">Layer 227</span>

TL name: `updateDialogUnreadMark`  
Constructor ID: `0xb658f23e`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `unread` | `bool` *(flags.0)* | | 
| `peer` | `DialogPeer` | | 
| `saved_peer_id` | `Peer` *(flags.1)* | | 
