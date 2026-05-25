---
title: User
description: TL constructor user
---

# User

<span class="layer-badge">Layer 225</span>

TL name: `user`  
Constructor ID: `0x31774388`  
Returns: [User](/tl/types#user)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `self` | `bool` *(flags.10)* | | 
| `contact` | `bool` *(flags.11)* | | 
| `mutual_contact` | `bool` *(flags.12)* | | 
| `deleted` | `bool` *(flags.13)* | | 
| `bot` | `bool` *(flags.14)* | | 
| `bot_chat_history` | `bool` *(flags.15)* | | 
| `bot_nochats` | `bool` *(flags.16)* | | 
| `verified` | `bool` *(flags.17)* | | 
| `restricted` | `bool` *(flags.18)* | | 
| `min` | `bool` *(flags.20)* | | 
| `bot_inline_geo` | `bool` *(flags.21)* | | 
| `support` | `bool` *(flags.23)* | | 
| `scam` | `bool` *(flags.24)* | | 
| `apply_min_photo` | `bool` *(flags.25)* | | 
| `fake` | `bool` *(flags.26)* | | 
| `bot_attach_menu` | `bool` *(flags.27)* | | 
| `premium` | `bool` *(flags.28)* | | 
| `attach_menu_enabled` | `bool` *(flags.29)* | | 
| `flags2` | `uint32` | | 
| `bot_can_edit` | `bool` *(flags.1)* | | 
| `close_friend` | `bool` *(flags.2)* | | 
| `stories_hidden` | `bool` *(flags.3)* | | 
| `stories_unavailable` | `bool` *(flags.4)* | | 
| `contact_require_premium` | `bool` *(flags.10)* | | 
| `bot_business` | `bool` *(flags.11)* | | 
| `bot_has_main_app` | `bool` *(flags.13)* | | 
| `bot_forum_view` | `bool` *(flags.16)* | | 
| `bot_forum_can_manage_topics` | `bool` *(flags.17)* | | 
| `bot_can_manage_bots` | `bool` *(flags.18)* | | 
| `bot_guestchat` | `bool` *(flags.19)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` *(flags.0)* | | 
| `first_name` | `string` *(flags.1)* | | 
| `last_name` | `string` *(flags.2)* | | 
| `username` | `string` *(flags.3)* | | 
| `phone` | `string` *(flags.4)* | | 
| `photo` | `UserProfilePhoto` *(flags.5)* | | 
| `status` | `UserStatus` *(flags.6)* | | 
| `bot_info_version` | `int32` *(flags.14)* | | 
| `restriction_reason` | `[]RestrictionReason` *(flags.18)* | | 
| `bot_inline_placeholder` | `string` *(flags.19)* | | 
| `lang_code` | `string` *(flags.22)* | | 
| `emoji_status` | `EmojiStatus` *(flags.30)* | | 
| `usernames` | `[]Username` *(flags.0)* | | 
| `stories_max_id` | `RecentStory` *(flags.5)* | | 
| `color` | `PeerColor` *(flags.8)* | | 
| `profile_color` | `PeerColor` *(flags.9)* | | 
| `bot_active_users` | `int32` *(flags.12)* | | 
| `bot_verification_icon` | `int64` *(flags.14)* | | 
| `send_paid_messages_stars` | `int64` *(flags.15)* | | 
