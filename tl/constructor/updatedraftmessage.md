---
title: UpdateDraftMessage
description: TL constructor updateDraftMessage
---

# UpdateDraftMessage

<span class="layer-badge">Layer 225</span>

TL name: `updateDraftMessage`  
Constructor ID: `0xedfc111e`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `peer` | `Peer` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `saved_peer_id` | `Peer` *(flags.1)* | | 
| `draft` | `DraftMessage` | | 
