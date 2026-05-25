---
title: ChannelAdminLogEventsFilter
description: TL constructor channelAdminLogEventsFilter
---

# ChannelAdminLogEventsFilter

<span class="layer-badge">Layer 225</span>

TL name: `channelAdminLogEventsFilter`  
Constructor ID: `0xea107ae4`  
Returns: [ChannelAdminLogEventsFilter](/tl/types#channeladminlogeventsfilter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `join` | `bool` *(flags.0)* | | 
| `leave` | `bool` *(flags.1)* | | 
| `invite` | `bool` *(flags.2)* | | 
| `ban` | `bool` *(flags.3)* | | 
| `unban` | `bool` *(flags.4)* | | 
| `kick` | `bool` *(flags.5)* | | 
| `unkick` | `bool` *(flags.6)* | | 
| `promote` | `bool` *(flags.7)* | | 
| `demote` | `bool` *(flags.8)* | | 
| `info` | `bool` *(flags.9)* | | 
| `settings` | `bool` *(flags.10)* | | 
| `pinned` | `bool` *(flags.11)* | | 
| `edit` | `bool` *(flags.12)* | | 
| `delete` | `bool` *(flags.13)* | | 
| `group_call` | `bool` *(flags.14)* | | 
| `invites` | `bool` *(flags.15)* | | 
| `send` | `bool` *(flags.16)* | | 
| `forums` | `bool` *(flags.17)* | | 
| `sub_extend` | `bool` *(flags.18)* | | 
| `edit_rank` | `bool` *(flags.19)* | | 
