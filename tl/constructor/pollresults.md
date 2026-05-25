---
title: PollResults
description: TL constructor pollResults
---

# PollResults

<span class="layer-badge">Layer 225</span>

TL name: `pollResults`  
Constructor ID: `0xba7bb15e`  
Returns: [PollResults](/tl/types#pollresults)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `min` | `bool` *(flags.0)* | | 
| `has_unread_votes` | `bool` *(flags.6)* | | 
| `can_view_stats` | `bool` *(flags.7)* | | 
| `results` | `[]PollAnswerVoters` *(flags.1)* | | 
| `total_voters` | `int32` *(flags.2)* | | 
| `recent_voters` | `[]Peer` *(flags.3)* | | 
| `solution` | `string` *(flags.4)* | | 
| `solution_entities` | `[]MessageEntity` *(flags.4)* | | 
| `solution_media` | `MessageMedia` *(flags.5)* | | 
