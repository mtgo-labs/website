---
title: MessageMediaToDo
description: TL constructor messageMediaToDo
---

# MessageMediaToDo

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaToDo`  
Constructor ID: `0x8a53b014`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `todo` | `TodoList` | | 
| `completions` | `[]TodoCompletion` *(flags.0)* | | 
