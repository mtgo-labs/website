---
title: ChannelAdminLogEventActionParticipantJoinByInvite
description: TL constructor channelAdminLogEventActionParticipantJoinByInvite
---

# ChannelAdminLogEventActionParticipantJoinByInvite

<span class="layer-badge">Layer 225</span>

TL name: `channelAdminLogEventActionParticipantJoinByInvite`  
Constructor ID: `0xfe9fc158`  
Returns: [ChannelAdminLogEventAction](/tl/types#channeladminlogeventaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_chatlist` | `bool` *(flags.0)* | | 
| `invite` | `ExportedChatInvite` | | 
