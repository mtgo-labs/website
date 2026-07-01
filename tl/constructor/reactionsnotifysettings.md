---
title: ReactionsNotifySettings
description: TL constructor reactionsNotifySettings
---

# ReactionsNotifySettings

<span class="layer-badge">Layer 227</span>

TL name: `reactionsNotifySettings`  
Constructor ID: `0x71e4ea58`  
Returns: [ReactionsNotifySettings](/tl/types#reactionsnotifysettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `messages_notify_from` | `ReactionNotificationsFrom` *(flags.0)* | | 
| `stories_notify_from` | `ReactionNotificationsFrom` *(flags.1)* | | 
| `poll_votes_notify_from` | `ReactionNotificationsFrom` *(flags.2)* | | 
| `sound` | `NotificationSound` | | 
| `show_previews` | `bool` | | 
