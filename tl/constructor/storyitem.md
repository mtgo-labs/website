---
title: StoryItem
description: TL constructor storyItem
---

# StoryItem

<span class="layer-badge">Layer 225</span>

TL name: `storyItem`  
Constructor ID: `0x16a4b93c`  
Returns: [StoryItem](/tl/types#storyitem)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pinned` | `bool` *(flags.5)* | | 
| `public` | `bool` *(flags.7)* | | 
| `close_friends` | `bool` *(flags.8)* | | 
| `min` | `bool` *(flags.9)* | | 
| `noforwards` | `bool` *(flags.10)* | | 
| `edited` | `bool` *(flags.11)* | | 
| `contacts` | `bool` *(flags.12)* | | 
| `selected_contacts` | `bool` *(flags.13)* | | 
| `out` | `bool` *(flags.16)* | | 
| `id` | `int32` | | 
| `date` | `int32` | | 
| `from_id` | `Peer` *(flags.18)* | | 
| `fwd_from` | `StoryFwdHeader` *(flags.17)* | | 
| `expire_date` | `int32` | | 
| `caption` | `string` *(flags.0)* | | 
| `entities` | `[]MessageEntity` *(flags.1)* | | 
| `media` | `MessageMedia` | | 
| `media_areas` | `[]MediaArea` *(flags.14)* | | 
| `privacy` | `[]PrivacyRule` *(flags.2)* | | 
| `views` | `StoryViews` *(flags.3)* | | 
| `sent_reaction` | `Reaction` *(flags.15)* | | 
| `albums` | `[]int32` *(flags.19)* | | 
| `music` | `Document` *(flags.20)* | | 
