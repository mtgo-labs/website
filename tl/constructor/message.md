---
title: Message
description: TL constructor message
---

# Message

<span class="layer-badge">Layer 225</span>

TL name: `message`  
Constructor ID: `0x95ef6f2b`  
Returns: [Message](/tl/types#message)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `out` | `bool` *(flags.1)* | | 
| `mentioned` | `bool` *(flags.4)* | | 
| `media_unread` | `bool` *(flags.5)* | | 
| `silent` | `bool` *(flags.13)* | | 
| `post` | `bool` *(flags.14)* | | 
| `from_scheduled` | `bool` *(flags.18)* | | 
| `legacy` | `bool` *(flags.19)* | | 
| `edit_hide` | `bool` *(flags.21)* | | 
| `pinned` | `bool` *(flags.24)* | | 
| `noforwards` | `bool` *(flags.26)* | | 
| `invert_media` | `bool` *(flags.27)* | | 
| `flags2` | `uint32` | | 
| `offline` | `bool` *(flags.1)* | | 
| `video_processing_pending` | `bool` *(flags.4)* | | 
| `paid_suggested_post_stars` | `bool` *(flags.8)* | | 
| `paid_suggested_post_ton` | `bool` *(flags.9)* | | 
| `id` | `int32` | | 
| `from_id` | `Peer` *(flags.8)* | | 
| `from_boosts_applied` | `int32` *(flags.29)* | | 
| `from_rank` | `string` *(flags.12)* | | 
| `peer_id` | `Peer` | | 
| `saved_peer_id` | `Peer` *(flags.28)* | | 
| `fwd_from` | `MessageFwdHeader` *(flags.2)* | | 
| `via_bot_id` | `int64` *(flags.11)* | | 
| `via_business_bot_id` | `int64` *(flags.0)* | | 
| `guestchat_via_from` | `Peer` *(flags.19)* | | 
| `reply_to` | `MessageReplyHeader` *(flags.3)* | | 
| `date` | `int32` | | 
| `message` | `string` | | 
| `media` | `MessageMedia` *(flags.9)* | | 
| `reply_markup` | `ReplyMarkup` *(flags.6)* | | 
| `entities` | `[]MessageEntity` *(flags.7)* | | 
| `views` | `int32` *(flags.10)* | | 
| `forwards` | `int32` *(flags.10)* | | 
| `replies` | `MessageReplies` *(flags.23)* | | 
| `edit_date` | `int32` *(flags.15)* | | 
| `post_author` | `string` *(flags.16)* | | 
| `grouped_id` | `int64` *(flags.17)* | | 
| `reactions` | `MessageReactions` *(flags.20)* | | 
| `restriction_reason` | `[]RestrictionReason` *(flags.22)* | | 
| `ttl_period` | `int32` *(flags.25)* | | 
| `quick_reply_shortcut_id` | `int32` *(flags.30)* | | 
| `effect` | `int64` *(flags.2)* | | 
| `factcheck` | `FactCheck` *(flags.3)* | | 
| `report_delivery_until_date` | `int32` *(flags.5)* | | 
| `paid_message_stars` | `int64` *(flags.6)* | | 
| `suggested_post` | `SuggestedPost` *(flags.7)* | | 
| `schedule_repeat_period` | `int32` *(flags.10)* | | 
| `summary_from_language` | `string` *(flags.11)* | | 
