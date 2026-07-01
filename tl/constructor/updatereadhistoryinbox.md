---
title: UpdateReadHistoryInbox
description: TL constructor updateReadHistoryInbox
---

# UpdateReadHistoryInbox

<span class="layer-badge">Layer 227</span>

TL name: `updateReadHistoryInbox`  
Constructor ID: `0x9e84bc99`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `folder_id` | `int32` *(flags.0)* | | 
| `peer` | `Peer` | | 
| `top_msg_id` | `int32` *(flags.1)* | | 
| `max_id` | `int32` | | 
| `still_unread_count` | `int32` | | 
| `pts` | `int32` | | 
| `pts_count` | `int32` | | 
