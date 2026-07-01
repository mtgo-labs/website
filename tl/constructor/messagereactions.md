---
title: MessageReactions
description: TL constructor messageReactions
---

# MessageReactions

<span class="layer-badge">Layer 227</span>

TL name: `messageReactions`  
Constructor ID: `0x0a339f0b`  
Returns: [MessageReactions](/tl/types#messagereactions)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `min` | `bool` *(flags.0)* | | 
| `can_see_list` | `bool` *(flags.2)* | | 
| `reactions_as_tags` | `bool` *(flags.3)* | | 
| `results` | `[]ReactionCount` | | 
| `recent_reactions` | `[]MessagePeerReaction` *(flags.1)* | | 
| `top_reactors` | `[]MessageReactor` *(flags.4)* | | 
