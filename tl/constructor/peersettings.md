---
title: PeerSettings
description: TL constructor peerSettings
---

# PeerSettings

<span class="layer-badge">Layer 225</span>

TL name: `peerSettings`  
Constructor ID: `0xf47741f7`  
Returns: [PeerSettings](/tl/types#peersettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `report_spam` | `bool` *(flags.0)* | | 
| `add_contact` | `bool` *(flags.1)* | | 
| `block_contact` | `bool` *(flags.2)* | | 
| `share_contact` | `bool` *(flags.3)* | | 
| `need_contacts_exception` | `bool` *(flags.4)* | | 
| `report_geo` | `bool` *(flags.5)* | | 
| `autoarchived` | `bool` *(flags.7)* | | 
| `invite_members` | `bool` *(flags.8)* | | 
| `request_chat_broadcast` | `bool` *(flags.10)* | | 
| `business_bot_paused` | `bool` *(flags.11)* | | 
| `business_bot_can_reply` | `bool` *(flags.12)* | | 
| `geo_distance` | `int32` *(flags.6)* | | 
| `request_chat_title` | `string` *(flags.9)* | | 
| `request_chat_date` | `int32` *(flags.9)* | | 
| `business_bot_id` | `int64` *(flags.13)* | | 
| `business_bot_manage_url` | `string` *(flags.13)* | | 
| `charge_paid_message_stars` | `int64` *(flags.14)* | | 
| `registration_month` | `string` *(flags.15)* | | 
| `phone_country` | `string` *(flags.16)* | | 
| `name_change_date` | `int32` *(flags.17)* | | 
| `photo_change_date` | `int32` *(flags.18)* | | 
