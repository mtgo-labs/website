---
title: ChannelDifference
description: TL constructor updates.channelDifference
---

# ChannelDifference

<span class="layer-badge">Layer 225</span>

TL name: `updates.channelDifference`  
Constructor ID: `0x2064674e`  
Returns: [ChannelDifference](/tl/types#channeldifference)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `final` | `bool` *(flags.0)* | | 
| `pts` | `int32` | | 
| `timeout` | `int32` *(flags.1)* | | 
| `new_messages` | `[]Message` | | 
| `other_updates` | `[]Update` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
