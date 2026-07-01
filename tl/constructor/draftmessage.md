---
title: DraftMessage
description: TL constructor draftMessage
---

# DraftMessage

<span class="layer-badge">Layer 227</span>

TL name: `draftMessage`  
Constructor ID: `0x60fe3294`  
Returns: [DraftMessage](/tl/types#draftmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `no_webpage` | `bool` *(flags.1)* | | 
| `invert_media` | `bool` *(flags.6)* | | 
| `reply_to` | `InputReplyTo` *(flags.4)* | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.3)* | | 
| `media` | `InputMedia` *(flags.5)* | | 
| `date` | `int32` | | 
| `effect` | `int64` *(flags.7)* | | 
| `suggested_post` | `SuggestedPost` *(flags.8)* | | 
| `rich_message` | `RichMessage` *(flags.9)* | | 
