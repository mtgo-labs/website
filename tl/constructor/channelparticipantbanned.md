---
title: ChannelParticipantBanned
description: TL constructor channelParticipantBanned
---

# ChannelParticipantBanned

<span class="layer-badge">Layer 227</span>

TL name: `channelParticipantBanned`  
Constructor ID: `0xd5f0ad91`  
Returns: [ChannelParticipant](/tl/types#channelparticipant)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `left` | `bool` *(flags.0)* | | 
| `peer` | `Peer` | | 
| `kicked_by` | `int64` | | 
| `date` | `int32` | | 
| `banned_rights` | `ChatBannedRights` | | 
| `rank` | `string` *(flags.2)* | | 
