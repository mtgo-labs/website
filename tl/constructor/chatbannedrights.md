---
title: ChatBannedRights
description: TL constructor chatBannedRights
---

# ChatBannedRights

<span class="layer-badge">Layer 227</span>

TL name: `chatBannedRights`  
Constructor ID: `0x9f120418`  
Returns: [ChatBannedRights](/tl/types#chatbannedrights)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `view_messages` | `bool` *(flags.0)* | | 
| `send_messages` | `bool` *(flags.1)* | | 
| `send_media` | `bool` *(flags.2)* | | 
| `send_stickers` | `bool` *(flags.3)* | | 
| `send_gifs` | `bool` *(flags.4)* | | 
| `send_games` | `bool` *(flags.5)* | | 
| `send_inline` | `bool` *(flags.6)* | | 
| `embed_links` | `bool` *(flags.7)* | | 
| `send_polls` | `bool` *(flags.8)* | | 
| `change_info` | `bool` *(flags.10)* | | 
| `invite_users` | `bool` *(flags.15)* | | 
| `pin_messages` | `bool` *(flags.17)* | | 
| `manage_topics` | `bool` *(flags.18)* | | 
| `send_photos` | `bool` *(flags.19)* | | 
| `send_videos` | `bool` *(flags.20)* | | 
| `send_roundvideos` | `bool` *(flags.21)* | | 
| `send_audios` | `bool` *(flags.22)* | | 
| `send_voices` | `bool` *(flags.23)* | | 
| `send_docs` | `bool` *(flags.24)* | | 
| `send_plain` | `bool` *(flags.25)* | | 
| `edit_rank` | `bool` *(flags.26)* | | 
| `send_reactions` | `bool` *(flags.27)* | | 
| `until_date` | `int32` | | 
