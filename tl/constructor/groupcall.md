---
title: GroupCall
description: TL constructor groupCall
---

# GroupCall

<span class="layer-badge">Layer 227</span>

TL name: `groupCall`  
Constructor ID: `0xefb2b617`  
Returns: [GroupCall](/tl/types#groupcall)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `join_muted` | `bool` *(flags.1)* | | 
| `can_change_join_muted` | `bool` *(flags.2)* | | 
| `join_date_asc` | `bool` *(flags.6)* | | 
| `schedule_start_subscribed` | `bool` *(flags.8)* | | 
| `can_start_video` | `bool` *(flags.9)* | | 
| `record_video_active` | `bool` *(flags.11)* | | 
| `rtmp_stream` | `bool` *(flags.12)* | | 
| `listeners_hidden` | `bool` *(flags.13)* | | 
| `conference` | `bool` *(flags.14)* | | 
| `creator` | `bool` *(flags.15)* | | 
| `messages_enabled` | `bool` *(flags.17)* | | 
| `can_change_messages_enabled` | `bool` *(flags.18)* | | 
| `min` | `bool` *(flags.19)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `participants_count` | `int32` | | 
| `title` | `string` *(flags.3)* | | 
| `stream_dc_id` | `int32` *(flags.4)* | | 
| `record_start_date` | `int32` *(flags.5)* | | 
| `schedule_date` | `int32` *(flags.7)* | | 
| `unmuted_video_count` | `int32` *(flags.10)* | | 
| `unmuted_video_limit` | `int32` | | 
| `version` | `int32` | | 
| `invite_link` | `string` *(flags.16)* | | 
| `send_paid_messages_stars` | `int64` *(flags.20)* | | 
| `default_send_as` | `Peer` *(flags.21)* | | 
