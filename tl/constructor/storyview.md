---
title: StoryView
description: TL constructor storyView
---

# StoryView

<span class="layer-badge">Layer 227</span>

TL name: `storyView`  
Constructor ID: `0xb0bdeac5`  
Returns: [StoryView](/tl/types#storyview)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `blocked` | `bool` *(flags.0)* | | 
| `blocked_my_stories_from` | `bool` *(flags.1)* | | 
| `user_id` | `int64` | | 
| `date` | `int32` | | 
| `reaction` | `Reaction` *(flags.2)* | | 
