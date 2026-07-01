---
title: UpdateChatParticipant
description: TL constructor updateChatParticipant
---

# UpdateChatParticipant

<span class="layer-badge">Layer 227</span>

TL name: `updateChatParticipant`  
Constructor ID: `0xd087663a`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `chat_id` | `int64` | | 
| `date` | `int32` | | 
| `actor_id` | `int64` | | 
| `user_id` | `int64` | | 
| `prev_participant` | `ChatParticipant` *(flags.0)* | | 
| `new_participant` | `ChatParticipant` *(flags.1)* | | 
| `invite` | `ExportedChatInvite` *(flags.2)* | | 
| `qts` | `int32` | | 
