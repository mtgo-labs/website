---
title: ForumTopic
description: TL constructor forumTopic
---

# ForumTopic

<span class="layer-badge">Layer 225</span>

TL name: `forumTopic`  
Constructor ID: `0xfcdad815`  
Returns: [ForumTopic](/tl/types#forumtopic)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `my` | `bool` *(flags.1)* | | 
| `closed` | `bool` *(flags.2)* | | 
| `pinned` | `bool` *(flags.3)* | | 
| `short` | `bool` *(flags.5)* | | 
| `hidden` | `bool` *(flags.6)* | | 
| `title_missing` | `bool` *(flags.7)* | | 
| `id` | `int32` | | 
| `date` | `int32` | | 
| `peer` | `Peer` | | 
| `title` | `string` | | 
| `icon_color` | `int32` | | 
| `icon_emoji_id` | `int64` *(flags.0)* | | 
| `top_message` | `int32` | | 
| `read_inbox_max_id` | `int32` | | 
| `read_outbox_max_id` | `int32` | | 
| `unread_count` | `int32` | | 
| `unread_mentions_count` | `int32` | | 
| `unread_reactions_count` | `int32` | | 
| `unread_poll_votes_count` | `int32` | | 
| `from_id` | `Peer` | | 
| `notify_settings` | `PeerNotifySettings` | | 
| `draft` | `DraftMessage` *(flags.4)* | | 
