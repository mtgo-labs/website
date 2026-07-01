---
title: ChannelParticipantSelf
description: TL constructor channelParticipantSelf
---

# ChannelParticipantSelf

<span class="layer-badge">Layer 227</span>

TL name: `channelParticipantSelf`  
Constructor ID: `0xa9478a1a`  
Returns: [ChannelParticipant](/tl/types#channelparticipant)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_request` | `bool` *(flags.0)* | | 
| `user_id` | `int64` | | 
| `inviter_id` | `int64` | | 
| `date` | `int32` | | 
| `subscription_until_date` | `int32` *(flags.1)* | | 
| `rank` | `string` *(flags.2)* | | 
