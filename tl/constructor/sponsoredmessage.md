---
title: SponsoredMessage
description: TL constructor sponsoredMessage
---

# SponsoredMessage

<span class="layer-badge">Layer 225</span>

TL name: `sponsoredMessage`  
Constructor ID: `0x7dbf8673`  
Returns: [SponsoredMessage](/tl/types#sponsoredmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `recommended` | `bool` *(flags.5)* | | 
| `can_report` | `bool` *(flags.12)* | | 
| `random_id` | `[]byte` | | 
| `url` | `string` | | 
| `title` | `string` | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `photo` | `Photo` *(flags.6)* | | 
| `media` | `MessageMedia` *(flags.14)* | | 
| `color` | `PeerColor` *(flags.13)* | | 
| `button_text` | `string` | | 
| `sponsor_info` | `string` *(flags.7)* | | 
| `additional_info` | `string` *(flags.8)* | | 
| `min_display_duration` | `int32` *(flags.15)* | | 
| `max_display_duration` | `int32` *(flags.15)* | | 
