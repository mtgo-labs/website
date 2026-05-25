---
title: InputPeerNotifySettings
description: TL constructor inputPeerNotifySettings
---

# InputPeerNotifySettings

<span class="layer-badge">Layer 225</span>

TL name: `inputPeerNotifySettings`  
Constructor ID: `0xcacb6ae2`  
Returns: [InputPeerNotifySettings](/tl/types#inputpeernotifysettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `show_previews` | `bool` *(flags.0)* | | 
| `silent` | `bool` *(flags.1)* | | 
| `mute_until` | `int32` *(flags.2)* | | 
| `sound` | `NotificationSound` *(flags.3)* | | 
| `stories_muted` | `bool` *(flags.6)* | | 
| `stories_hide_sender` | `bool` *(flags.7)* | | 
| `stories_sound` | `NotificationSound` *(flags.8)* | | 
