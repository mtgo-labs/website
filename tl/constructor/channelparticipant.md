---
title: ChannelParticipant
description: TL constructor channelParticipant
---

# ChannelParticipant

<span class="layer-badge">Layer 227</span>

TL name: `channelParticipant`  
Constructor ID: `0x1bd54456`  
Returns: [ChannelParticipant](/tl/types#channelparticipant)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `user_id` | `int64` | | 
| `date` | `int32` | | 
| `subscription_until_date` | `int32` *(flags.0)* | | 
| `rank` | `string` *(flags.2)* | | 
