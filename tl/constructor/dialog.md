---
title: Dialog
description: TL constructor dialog
---

# Dialog

<span class="layer-badge">Layer 227</span>

TL name: `dialog`  
Constructor ID: `0xfc89f7f3`  
Returns: [Dialog](/tl/types#dialog)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pinned` | `bool` *(flags.2)* | | 
| `unread_mark` | `bool` *(flags.3)* | | 
| `view_forum_as_messages` | `bool` *(flags.6)* | | 
| `peer` | `Peer` | | 
| `top_message` | `int32` | | 
| `read_inbox_max_id` | `int32` | | 
| `read_outbox_max_id` | `int32` | | 
| `unread_count` | `int32` | | 
| `unread_mentions_count` | `int32` | | 
| `unread_reactions_count` | `int32` | | 
| `unread_poll_votes_count` | `int32` | | 
| `notify_settings` | `PeerNotifySettings` | | 
| `pts` | `int32` *(flags.0)* | | 
| `draft` | `DraftMessage` *(flags.1)* | | 
| `folder_id` | `int32` *(flags.4)* | | 
| `ttl_period` | `int32` *(flags.5)* | | 
