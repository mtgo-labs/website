---
title: DialogFilter
description: TL constructor dialogFilter
---

# DialogFilter

<span class="layer-badge">Layer 225</span>

TL name: `dialogFilter`  
Constructor ID: `0xaa472651`  
Returns: [DialogFilter](/tl/types#dialogfilter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `contacts` | `bool` *(flags.0)* | | 
| `non_contacts` | `bool` *(flags.1)* | | 
| `groups` | `bool` *(flags.2)* | | 
| `broadcasts` | `bool` *(flags.3)* | | 
| `bots` | `bool` *(flags.4)* | | 
| `exclude_muted` | `bool` *(flags.11)* | | 
| `exclude_read` | `bool` *(flags.12)* | | 
| `exclude_archived` | `bool` *(flags.13)* | | 
| `title_noanimate` | `bool` *(flags.28)* | | 
| `id` | `int32` | | 
| `title` | `TextWithEntities` | | 
| `emoticon` | `string` *(flags.25)* | | 
| `color` | `int32` *(flags.27)* | | 
| `pinned_peers` | `[]InputPeer` | | 
| `include_peers` | `[]InputPeer` | | 
| `exclude_peers` | `[]InputPeer` | | 
