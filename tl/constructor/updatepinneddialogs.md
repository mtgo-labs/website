---
title: UpdatePinnedDialogs
description: TL constructor updatePinnedDialogs
---

# UpdatePinnedDialogs

<span class="layer-badge">Layer 225</span>

TL name: `updatePinnedDialogs`  
Constructor ID: `0xfa0f3ca2`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `folder_id` | `int32` *(flags.1)* | | 
| `order` | `[]DialogPeer` *(flags.0)* | | 
