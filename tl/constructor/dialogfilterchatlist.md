---
title: DialogFilterChatlist
description: TL constructor dialogFilterChatlist
---

# DialogFilterChatlist

<span class="layer-badge">Layer 227</span>

TL name: `dialogFilterChatlist`  
Constructor ID: `0x96537bd7`  
Returns: [DialogFilter](/tl/types#dialogfilter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_my_invites` | `bool` *(flags.26)* | | 
| `title_noanimate` | `bool` *(flags.28)* | | 
| `id` | `int32` | | 
| `title` | `TextWithEntities` | | 
| `emoticon` | `string` *(flags.25)* | | 
| `color` | `int32` *(flags.27)* | | 
| `pinned_peers` | `[]InputPeer` | | 
| `include_peers` | `[]InputPeer` | | 
