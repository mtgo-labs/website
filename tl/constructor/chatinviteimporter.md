---
title: ChatInviteImporter
description: TL constructor chatInviteImporter
---

# ChatInviteImporter

<span class="layer-badge">Layer 227</span>

TL name: `chatInviteImporter`  
Constructor ID: `0x8c5adfd9`  
Returns: [ChatInviteImporter](/tl/types#chatinviteimporter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `requested` | `bool` *(flags.0)* | | 
| `via_chatlist` | `bool` *(flags.3)* | | 
| `user_id` | `int64` | | 
| `date` | `int32` | | 
| `about` | `string` *(flags.2)* | | 
| `approved_by` | `int64` *(flags.1)* | | 
