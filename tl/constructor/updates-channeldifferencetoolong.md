---
title: ChannelDifferenceTooLong
description: TL constructor updates.channelDifferenceTooLong
---

# ChannelDifferenceTooLong

<span class="layer-badge">Layer 227</span>

TL name: `updates.channelDifferenceTooLong`  
Constructor ID: `0xa4bcc6fe`  
Returns: [ChannelDifference](/tl/types#channeldifference)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `final` | `bool` *(flags.0)* | | 
| `timeout` | `int32` *(flags.1)* | | 
| `dialog` | `Dialog` | | 
| `messages` | `[]Message` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
