---
title: Channel
description: TL constructor channel
---

# Channel

<span class="layer-badge">Layer 225</span>

TL name: `channel`  
Constructor ID: `0x1c32b11c`  
Returns: [Chat](/tl/types#chat)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `left` | `bool` *(flags.2)* | | 
| `broadcast` | `bool` *(flags.5)* | | 
| `verified` | `bool` *(flags.7)* | | 
| `megagroup` | `bool` *(flags.8)* | | 
| `restricted` | `bool` *(flags.9)* | | 
| `signatures` | `bool` *(flags.11)* | | 
| `min` | `bool` *(flags.12)* | | 
| `scam` | `bool` *(flags.19)* | | 
| `has_link` | `bool` *(flags.20)* | | 
| `has_geo` | `bool` *(flags.21)* | | 
| `slowmode_enabled` | `bool` *(flags.22)* | | 
| `call_active` | `bool` *(flags.23)* | | 
| `call_not_empty` | `bool` *(flags.24)* | | 
| `fake` | `bool` *(flags.25)* | | 
| `gigagroup` | `bool` *(flags.26)* | | 
| `noforwards` | `bool` *(flags.27)* | | 
| `join_to_send` | `bool` *(flags.28)* | | 
| `join_request` | `bool` *(flags.29)* | | 
| `forum` | `bool` *(flags.30)* | | 
| `flags2` | `uint32` | | 
| `stories_hidden` | `bool` *(flags.1)* | | 
| `stories_hidden_min` | `bool` *(flags.2)* | | 
| `stories_unavailable` | `bool` *(flags.3)* | | 
| `signature_profiles` | `bool` *(flags.12)* | | 
| `autotranslation` | `bool` *(flags.15)* | | 
| `broadcast_messages_allowed` | `bool` *(flags.16)* | | 
| `monoforum` | `bool` *(flags.17)* | | 
| `forum_tabs` | `bool` *(flags.19)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` *(flags.13)* | | 
| `title` | `string` | | 
| `username` | `string` *(flags.6)* | | 
| `photo` | `ChatPhoto` | | 
| `date` | `int32` | | 
| `restriction_reason` | `[]RestrictionReason` *(flags.9)* | | 
| `admin_rights` | `ChatAdminRights` *(flags.14)* | | 
| `banned_rights` | `ChatBannedRights` *(flags.15)* | | 
| `default_banned_rights` | `ChatBannedRights` *(flags.18)* | | 
| `participants_count` | `int32` *(flags.17)* | | 
| `usernames` | `[]Username` *(flags.0)* | | 
| `stories_max_id` | `RecentStory` *(flags.4)* | | 
| `color` | `PeerColor` *(flags.7)* | | 
| `profile_color` | `PeerColor` *(flags.8)* | | 
| `emoji_status` | `EmojiStatus` *(flags.9)* | | 
| `level` | `int32` *(flags.10)* | | 
| `subscription_until_date` | `int32` *(flags.11)* | | 
| `bot_verification_icon` | `int64` *(flags.13)* | | 
| `send_paid_messages_stars` | `int64` *(flags.14)* | | 
| `linked_monoforum_id` | `int64` *(flags.18)* | | 
