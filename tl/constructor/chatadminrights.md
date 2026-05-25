---
title: ChatAdminRights
description: TL constructor chatAdminRights
---

# ChatAdminRights

<span class="layer-badge">Layer 225</span>

TL name: `chatAdminRights`  
Constructor ID: `0x5fb224d5`  
Returns: [ChatAdminRights](/tl/types#chatadminrights)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `change_info` | `bool` *(flags.0)* | | 
| `post_messages` | `bool` *(flags.1)* | | 
| `edit_messages` | `bool` *(flags.2)* | | 
| `delete_messages` | `bool` *(flags.3)* | | 
| `ban_users` | `bool` *(flags.4)* | | 
| `invite_users` | `bool` *(flags.5)* | | 
| `pin_messages` | `bool` *(flags.7)* | | 
| `add_admins` | `bool` *(flags.9)* | | 
| `anonymous` | `bool` *(flags.10)* | | 
| `manage_call` | `bool` *(flags.11)* | | 
| `other` | `bool` *(flags.12)* | | 
| `manage_topics` | `bool` *(flags.13)* | | 
| `post_stories` | `bool` *(flags.14)* | | 
| `edit_stories` | `bool` *(flags.15)* | | 
| `delete_stories` | `bool` *(flags.16)* | | 
| `manage_direct_messages` | `bool` *(flags.17)* | | 
| `manage_ranks` | `bool` *(flags.18)* | | 
