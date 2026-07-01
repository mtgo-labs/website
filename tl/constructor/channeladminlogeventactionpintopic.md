---
title: ChannelAdminLogEventActionPinTopic
description: TL constructor channelAdminLogEventActionPinTopic
---

# ChannelAdminLogEventActionPinTopic

<span class="layer-badge">Layer 227</span>

TL name: `channelAdminLogEventActionPinTopic`  
Constructor ID: `0x5d8d353b`  
Returns: [ChannelAdminLogEventAction](/tl/types#channeladminlogeventaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `prev_topic` | `ForumTopic` *(flags.0)* | | 
| `new_topic` | `ForumTopic` *(flags.1)* | | 
