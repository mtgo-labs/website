---
title: PeerNotifySettings
description: TL constructor peerNotifySettings
---

# PeerNotifySettings

<span class="layer-badge">Layer 227</span>

TL name: `peerNotifySettings`  
Constructor ID: `0x99622c0c`  
Returns: [PeerNotifySettings](/tl/types#peernotifysettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `show_previews` | `bool` *(flags.0)* | | 
| `silent` | `bool` *(flags.1)* | | 
| `mute_until` | `int32` *(flags.2)* | | 
| `ios_sound` | `NotificationSound` *(flags.3)* | | 
| `android_sound` | `NotificationSound` *(flags.4)* | | 
| `other_sound` | `NotificationSound` *(flags.5)* | | 
| `stories_muted` | `bool` *(flags.6)* | | 
| `stories_hide_sender` | `bool` *(flags.7)* | | 
| `stories_ios_sound` | `NotificationSound` *(flags.8)* | | 
| `stories_android_sound` | `NotificationSound` *(flags.9)* | | 
| `stories_other_sound` | `NotificationSound` *(flags.10)* | | 
