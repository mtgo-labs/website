---
title: GroupCallMessage
description: TL constructor groupCallMessage
---

# GroupCallMessage

<span class="layer-badge">Layer 227</span>

TL name: `groupCallMessage`  
Constructor ID: `0x1a8afc7e`  
Returns: [GroupCallMessage](/tl/types#groupcallmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `from_admin` | `bool` *(flags.1)* | | 
| `id` | `int32` | | 
| `from_id` | `Peer` | | 
| `date` | `int32` | | 
| `message` | `TextWithEntities` | | 
| `paid_message_stars` | `int64` *(flags.0)* | | 
