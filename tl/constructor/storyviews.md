---
title: StoryViews
description: TL constructor storyViews
---

# StoryViews

<span class="layer-badge">Layer 225</span>

TL name: `storyViews`  
Constructor ID: `0x8d595cd6`  
Returns: [StoryViews](/tl/types#storyviews)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_viewers` | `bool` *(flags.1)* | | 
| `views_count` | `int32` | | 
| `forwards_count` | `int32` *(flags.2)* | | 
| `reactions` | `[]ReactionCount` *(flags.3)* | | 
| `reactions_count` | `int32` *(flags.4)* | | 
| `recent_viewers` | `[]int64` *(flags.0)* | | 
