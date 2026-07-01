---
title: TodoList
description: TL constructor todoList
---

# TodoList

<span class="layer-badge">Layer 227</span>

TL name: `todoList`  
Constructor ID: `0x49b92a26`  
Returns: [TodoList](/tl/types#todolist)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `others_can_append` | `bool` *(flags.0)* | | 
| `others_can_complete` | `bool` *(flags.1)* | | 
| `title` | `TextWithEntities` | | 
| `list` | `[]TodoItem` | | 
