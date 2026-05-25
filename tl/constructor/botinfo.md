---
title: BotInfo
description: TL constructor botInfo
---

# BotInfo

<span class="layer-badge">Layer 225</span>

TL name: `botInfo`  
Constructor ID: `0x4d8a0299`  
Returns: [BotInfo](/tl/types#botinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_preview_medias` | `bool` *(flags.6)* | | 
| `user_id` | `int64` *(flags.0)* | | 
| `description` | `string` *(flags.1)* | | 
| `description_photo` | `Photo` *(flags.4)* | | 
| `description_document` | `Document` *(flags.5)* | | 
| `commands` | `[]BotCommand` *(flags.2)* | | 
| `menu_button` | `BotMenuButton` *(flags.3)* | | 
| `privacy_policy_url` | `string` *(flags.7)* | | 
| `app_settings` | `BotAppSettings` *(flags.8)* | | 
| `verifier_settings` | `BotVerifierSettings` *(flags.9)* | | 
