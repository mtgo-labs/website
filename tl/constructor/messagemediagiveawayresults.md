---
title: MessageMediaGiveawayResults
description: TL constructor messageMediaGiveawayResults
---

# MessageMediaGiveawayResults

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaGiveawayResults`  
Constructor ID: `0xceaa3ea1`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `only_new_subscribers` | `bool` *(flags.0)* | | 
| `refunded` | `bool` *(flags.2)* | | 
| `channel_id` | `int64` | | 
| `additional_peers_count` | `int32` *(flags.3)* | | 
| `launch_msg_id` | `int32` | | 
| `winners_count` | `int32` | | 
| `unclaimed_count` | `int32` | | 
| `winners` | `[]int64` | | 
| `months` | `int32` *(flags.4)* | | 
| `stars` | `int64` *(flags.5)* | | 
| `prize_description` | `string` *(flags.1)* | | 
| `until_date` | `int32` | | 
