---
title: MonoForumDialog
description: TL constructor monoForumDialog
---

# MonoForumDialog

<span class="layer-badge">Layer 227</span>

TL name: `monoForumDialog`  
Constructor ID: `0x64407ea7`  
Returns: [SavedDialog](/tl/types#saveddialog)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `unread_mark` | `bool` *(flags.3)* | | 
| `nopaid_messages_exception` | `bool` *(flags.4)* | | 
| `peer` | `Peer` | | 
| `top_message` | `int32` | | 
| `read_inbox_max_id` | `int32` | | 
| `read_outbox_max_id` | `int32` | | 
| `unread_count` | `int32` | | 
| `unread_reactions_count` | `int32` | | 
| `draft` | `DraftMessage` *(flags.1)* | | 
