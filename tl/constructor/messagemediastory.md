---
title: MessageMediaStory
description: TL constructor messageMediaStory
---

# MessageMediaStory

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaStory`  
Constructor ID: `0x68cb6283`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_mention` | `bool` *(flags.1)* | | 
| `peer` | `Peer` | | 
| `id` | `int32` | | 
| `story` | `StoryItem` *(flags.0)* | | 
