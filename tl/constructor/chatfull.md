---
title: ChatFull
description: TL constructor chatFull
---

# ChatFull

<span class="layer-badge">Layer 227</span>

TL name: `chatFull`  
Constructor ID: `0x2633421b`  
Returns: [ChatFull](/tl/types#chatfull)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `can_set_username` | `bool` *(flags.7)* | | 
| `has_scheduled` | `bool` *(flags.8)* | | 
| `translations_disabled` | `bool` *(flags.19)* | | 
| `id` | `int64` | | 
| `about` | `string` | | 
| `participants` | `ChatParticipants` | | 
| `chat_photo` | `Photo` *(flags.2)* | | 
| `notify_settings` | `PeerNotifySettings` | | 
| `exported_invite` | `ExportedChatInvite` *(flags.13)* | | 
| `bot_info` | `[]BotInfo` *(flags.3)* | | 
| `pinned_msg_id` | `int32` *(flags.6)* | | 
| `folder_id` | `int32` *(flags.11)* | | 
| `call` | `InputGroupCall` *(flags.12)* | | 
| `ttl_period` | `int32` *(flags.14)* | | 
| `groupcall_default_join_as` | `Peer` *(flags.15)* | | 
| `theme_emoticon` | `string` *(flags.16)* | | 
| `requests_pending` | `int32` *(flags.17)* | | 
| `recent_requesters` | `[]int64` *(flags.17)* | | 
| `available_reactions` | `ChatReactions` *(flags.18)* | | 
| `reactions_limit` | `int32` *(flags.20)* | | 
