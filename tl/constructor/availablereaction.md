---
title: AvailableReaction
description: TL constructor availableReaction
---

# AvailableReaction

<span class="layer-badge">Layer 227</span>

TL name: `availableReaction`  
Constructor ID: `0xc077ec01`  
Returns: [AvailableReaction](/tl/types#availablereaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inactive` | `bool` *(flags.0)* | | 
| `premium` | `bool` *(flags.2)* | | 
| `reaction` | `string` | | 
| `title` | `string` | | 
| `static_icon` | `Document` | | 
| `appear_animation` | `Document` | | 
| `select_animation` | `Document` | | 
| `activate_animation` | `Document` | | 
| `effect_animation` | `Document` | | 
| `around_animation` | `Document` *(flags.1)* | | 
| `center_icon` | `Document` *(flags.1)* | | 
