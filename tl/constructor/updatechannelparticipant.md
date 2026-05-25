---
title: UpdateChannelParticipant
description: TL constructor updateChannelParticipant
---

# UpdateChannelParticipant

<span class="layer-badge">Layer 225</span>

TL name: `updateChannelParticipant`  
Constructor ID: `0x985d3abb`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_chatlist` | `bool` *(flags.3)* | | 
| `channel_id` | `int64` | | 
| `date` | `int32` | | 
| `actor_id` | `int64` | | 
| `user_id` | `int64` | | 
| `prev_participant` | `ChannelParticipant` *(flags.0)* | | 
| `new_participant` | `ChannelParticipant` *(flags.1)* | | 
| `invite` | `ExportedChatInvite` *(flags.2)* | | 
| `qts` | `int32` | | 
