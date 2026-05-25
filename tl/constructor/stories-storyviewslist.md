---
title: StoryViewsList
description: TL constructor stories.storyViewsList
---

# StoryViewsList

<span class="layer-badge">Layer 225</span>

TL name: `stories.storyViewsList`  
Constructor ID: `0x59d78fc5`  
Returns: [StoryViewsList](/tl/types#storyviewslist)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `count` | `int32` | | 
| `views_count` | `int32` | | 
| `forwards_count` | `int32` | | 
| `reactions_count` | `int32` | | 
| `views` | `[]StoryView` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
| `next_offset` | `string` *(flags.0)* | | 
