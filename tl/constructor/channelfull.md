---
title: ChannelFull
description: TL constructor channelFull
---

# ChannelFull

<span class="layer-badge">Layer 227</span>

TL name: `channelFull`  
Constructor ID: `0xa04e8d3a`  
Returns: [ChatFull](/tl/types#chatfull)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `can_view_participants` | `bool` *(flags.3)* | | 
| `can_set_username` | `bool` *(flags.6)* | | 
| `can_set_stickers` | `bool` *(flags.7)* | | 
| `hidden_prehistory` | `bool` *(flags.10)* | | 
| `can_set_location` | `bool` *(flags.16)* | | 
| `has_scheduled` | `bool` *(flags.19)* | | 
| `can_view_stats` | `bool` *(flags.20)* | | 
| `blocked` | `bool` *(flags.22)* | | 
| `flags2` | `uint32` | | 
| `can_delete_channel` | `bool` *(flags.0)* | | 
| `antispam` | `bool` *(flags.1)* | | 
| `participants_hidden` | `bool` *(flags.2)* | | 
| `translations_disabled` | `bool` *(flags.3)* | | 
| `stories_pinned_available` | `bool` *(flags.5)* | | 
| `view_forum_as_messages` | `bool` *(flags.6)* | | 
| `restricted_sponsored` | `bool` *(flags.11)* | | 
| `can_view_revenue` | `bool` *(flags.12)* | | 
| `paid_media_allowed` | `bool` *(flags.14)* | | 
| `can_view_stars_revenue` | `bool` *(flags.15)* | | 
| `paid_reactions_available` | `bool` *(flags.16)* | | 
| `stargifts_available` | `bool` *(flags.19)* | | 
| `paid_messages_available` | `bool` *(flags.20)* | | 
| `id` | `int64` | | 
| `about` | `string` | | 
| `participants_count` | `int32` *(flags.0)* | | 
| `admins_count` | `int32` *(flags.1)* | | 
| `kicked_count` | `int32` *(flags.2)* | | 
| `banned_count` | `int32` *(flags.2)* | | 
| `online_count` | `int32` *(flags.13)* | | 
| `read_inbox_max_id` | `int32` | | 
| `read_outbox_max_id` | `int32` | | 
| `unread_count` | `int32` | | 
| `chat_photo` | `Photo` | | 
| `notify_settings` | `PeerNotifySettings` | | 
| `exported_invite` | `ExportedChatInvite` *(flags.23)* | | 
| `bot_info` | `[]BotInfo` | | 
| `migrated_from_chat_id` | `int64` *(flags.4)* | | 
| `migrated_from_max_id` | `int32` *(flags.4)* | | 
| `pinned_msg_id` | `int32` *(flags.5)* | | 
| `stickerset` | `StickerSet` *(flags.8)* | | 
| `available_min_id` | `int32` *(flags.9)* | | 
| `folder_id` | `int32` *(flags.11)* | | 
| `linked_chat_id` | `int64` *(flags.14)* | | 
| `location` | `ChannelLocation` *(flags.15)* | | 
| `slowmode_seconds` | `int32` *(flags.17)* | | 
| `slowmode_next_send_date` | `int32` *(flags.18)* | | 
| `stats_dc` | `int32` *(flags.12)* | | 
| `pts` | `int32` | | 
| `call` | `InputGroupCall` *(flags.21)* | | 
| `ttl_period` | `int32` *(flags.24)* | | 
| `pending_suggestions` | `[]string` *(flags.25)* | | 
| `groupcall_default_join_as` | `Peer` *(flags.26)* | | 
| `theme_emoticon` | `string` *(flags.27)* | | 
| `requests_pending` | `int32` *(flags.28)* | | 
| `recent_requesters` | `[]int64` *(flags.28)* | | 
| `default_send_as` | `Peer` *(flags.29)* | | 
| `available_reactions` | `ChatReactions` *(flags.30)* | | 
| `reactions_limit` | `int32` *(flags.13)* | | 
| `stories` | `PeerStories` *(flags.4)* | | 
| `wallpaper` | `WallPaper` *(flags.7)* | | 
| `boosts_applied` | `int32` *(flags.8)* | | 
| `boosts_unrestrict` | `int32` *(flags.9)* | | 
| `emojiset` | `StickerSet` *(flags.10)* | | 
| `bot_verification` | `BotVerification` *(flags.17)* | | 
| `stargifts_count` | `int32` *(flags.18)* | | 
| `send_paid_messages_stars` | `int64` *(flags.21)* | | 
| `main_tab` | `ProfileTab` *(flags.22)* | | 
| `guard_bot_id` | `int64` *(flags.23)* | | 
