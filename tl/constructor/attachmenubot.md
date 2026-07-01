---
title: AttachMenuBot
description: TL constructor attachMenuBot
---

# AttachMenuBot

<span class="layer-badge">Layer 227</span>

TL name: `attachMenuBot`  
Constructor ID: `0xd90d8dfe`  
Returns: [AttachMenuBot](/tl/types#attachmenubot)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inactive` | `bool` *(flags.0)* | | 
| `has_settings` | `bool` *(flags.1)* | | 
| `request_write_access` | `bool` *(flags.2)* | | 
| `show_in_attach_menu` | `bool` *(flags.3)* | | 
| `show_in_side_menu` | `bool` *(flags.4)* | | 
| `side_menu_disclaimer_needed` | `bool` *(flags.5)* | | 
| `bot_id` | `int64` | | 
| `short_name` | `string` | | 
| `peer_types` | `[]AttachMenuPeerType` *(flags.3)* | | 
| `icons` | `[]AttachMenuBotIcon` | | 
