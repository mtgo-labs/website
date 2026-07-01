---
title: UserFull
description: TL constructor userFull
---

# UserFull

<span class="layer-badge">Layer 227</span>

TL name: `userFull`  
Constructor ID: `0x06cbe645`  
Returns: [UserFull](/tl/types#userfull)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `blocked` | `bool` *(flags.0)* | | 
| `phone_calls_available` | `bool` *(flags.4)* | | 
| `phone_calls_private` | `bool` *(flags.5)* | | 
| `can_pin_message` | `bool` *(flags.7)* | | 
| `has_scheduled` | `bool` *(flags.12)* | | 
| `video_calls_available` | `bool` *(flags.13)* | | 
| `voice_messages_forbidden` | `bool` *(flags.20)* | | 
| `translations_disabled` | `bool` *(flags.23)* | | 
| `stories_pinned_available` | `bool` *(flags.26)* | | 
| `blocked_my_stories_from` | `bool` *(flags.27)* | | 
| `wallpaper_overridden` | `bool` *(flags.28)* | | 
| `contact_require_premium` | `bool` *(flags.29)* | | 
| `read_dates_private` | `bool` *(flags.30)* | | 
| `flags2` | `uint32` | | 
| `sponsored_enabled` | `bool` *(flags.7)* | | 
| `can_view_revenue` | `bool` *(flags.9)* | | 
| `bot_can_manage_emoji_status` | `bool` *(flags.10)* | | 
| `display_gifts_button` | `bool` *(flags.16)* | | 
| `noforwards_my_enabled` | `bool` *(flags.23)* | | 
| `noforwards_peer_enabled` | `bool` *(flags.24)* | | 
| `unofficial_security_risk` | `bool` *(flags.26)* | | 
| `id` | `int64` | | 
| `about` | `string` *(flags.1)* | | 
| `settings` | `PeerSettings` | | 
| `personal_photo` | `Photo` *(flags.21)* | | 
| `profile_photo` | `Photo` *(flags.2)* | | 
| `fallback_photo` | `Photo` *(flags.22)* | | 
| `notify_settings` | `PeerNotifySettings` | | 
| `bot_info` | `BotInfo` *(flags.3)* | | 
| `pinned_msg_id` | `int32` *(flags.6)* | | 
| `common_chats_count` | `int32` | | 
| `folder_id` | `int32` *(flags.11)* | | 
| `ttl_period` | `int32` *(flags.14)* | | 
| `theme` | `ChatTheme` *(flags.15)* | | 
| `private_forward_name` | `string` *(flags.16)* | | 
| `bot_group_admin_rights` | `ChatAdminRights` *(flags.17)* | | 
| `bot_broadcast_admin_rights` | `ChatAdminRights` *(flags.18)* | | 
| `wallpaper` | `WallPaper` *(flags.24)* | | 
| `stories` | `PeerStories` *(flags.25)* | | 
| `business_work_hours` | `BusinessWorkHours` *(flags.0)* | | 
| `business_location` | `BusinessLocation` *(flags.1)* | | 
| `business_greeting_message` | `BusinessGreetingMessage` *(flags.2)* | | 
| `business_away_message` | `BusinessAwayMessage` *(flags.3)* | | 
| `business_intro` | `BusinessIntro` *(flags.4)* | | 
| `birthday` | `Birthday` *(flags.5)* | | 
| `personal_channel_id` | `int64` *(flags.6)* | | 
| `personal_channel_message` | `int32` *(flags.6)* | | 
| `stargifts_count` | `int32` *(flags.8)* | | 
| `starref_program` | `StarRefProgram` *(flags.11)* | | 
| `bot_verification` | `BotVerification` *(flags.12)* | | 
| `send_paid_messages_stars` | `int64` *(flags.14)* | | 
| `disallowed_gifts` | `DisallowedGiftsSettings` *(flags.15)* | | 
| `stars_rating` | `StarsRating` *(flags.17)* | | 
| `stars_my_pending_rating` | `StarsRating` *(flags.18)* | | 
| `stars_my_pending_rating_date` | `int32` *(flags.18)* | | 
| `main_tab` | `ProfileTab` *(flags.20)* | | 
| `saved_music` | `Document` *(flags.21)* | | 
| `note` | `TextWithEntities` *(flags.22)* | | 
| `bot_manager_id` | `int64` *(flags.25)* | | 
