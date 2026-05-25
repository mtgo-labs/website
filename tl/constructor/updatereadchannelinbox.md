---
title: UpdateReadChannelInbox
description: TL constructor updateReadChannelInbox
---

# UpdateReadChannelInbox

<span class="layer-badge">Layer 225</span>

TL name: `updateReadChannelInbox`  
Constructor ID: `0x922e6e10`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `folder_id` | `int32` *(flags.0)* | | 
| `channel_id` | `int64` | | 
| `max_id` | `int32` | | 
| `still_unread_count` | `int32` | | 
| `pts` | `int32` | | 
