---
title: StoryFwdHeader
description: TL constructor storyFwdHeader
---

# StoryFwdHeader

<span class="layer-badge">Layer 225</span>

TL name: `storyFwdHeader`  
Constructor ID: `0xb826e150`  
Returns: [StoryFwdHeader](/tl/types#storyfwdheader)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `modified` | `bool` *(flags.3)* | | 
| `from` | `Peer` *(flags.0)* | | 
| `from_name` | `string` *(flags.1)* | | 
| `story_id` | `int32` *(flags.2)* | | 
