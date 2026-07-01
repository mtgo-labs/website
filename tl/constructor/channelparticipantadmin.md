---
title: ChannelParticipantAdmin
description: TL constructor channelParticipantAdmin
---

# ChannelParticipantAdmin

<span class="layer-badge">Layer 227</span>

TL name: `channelParticipantAdmin`  
Constructor ID: `0x34c3bb53`  
Returns: [ChannelParticipant](/tl/types#channelparticipant)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `can_edit` | `bool` *(flags.0)* | | 
| `self` | `bool` *(flags.1)* | | 
| `user_id` | `int64` | | 
| `inviter_id` | `int64` *(flags.1)* | | 
| `promoted_by` | `int64` | | 
| `date` | `int32` | | 
| `admin_rights` | `ChatAdminRights` | | 
| `rank` | `string` *(flags.2)* | | 
