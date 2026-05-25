---
title: SponsoredMessages
description: TL constructor messages.sponsoredMessages
---

# SponsoredMessages

<span class="layer-badge">Layer 225</span>

TL name: `messages.sponsoredMessages`  
Constructor ID: `0xffda656d`  
Returns: [SponsoredMessages](/tl/types#sponsoredmessages)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `posts_between` | `int32` *(flags.0)* | | 
| `start_delay` | `int32` *(flags.1)* | | 
| `between_delay` | `int32` *(flags.2)* | | 
| `messages` | `[]SponsoredMessage` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
