---
title: Chat
description: TL constructor chat
---

# Chat

<span class="layer-badge">Layer 227</span>

TL name: `chat`  
Constructor ID: `0x41cbf256`  
Returns: [Chat](/tl/types#chat)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `left` | `bool` *(flags.2)* | | 
| `deactivated` | `bool` *(flags.5)* | | 
| `call_active` | `bool` *(flags.23)* | | 
| `call_not_empty` | `bool` *(flags.24)* | | 
| `noforwards` | `bool` *(flags.25)* | | 
| `id` | `int64` | | 
| `title` | `string` | | 
| `photo` | `ChatPhoto` | | 
| `participants_count` | `int32` | | 
| `date` | `int32` | | 
| `version` | `int32` | | 
| `migrated_to` | `InputChannel` *(flags.6)* | | 
| `admin_rights` | `ChatAdminRights` *(flags.14)* | | 
| `default_banned_rights` | `ChatBannedRights` *(flags.18)* | | 
