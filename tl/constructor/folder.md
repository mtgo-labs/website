---
title: Folder
description: TL constructor folder
---

# Folder

<span class="layer-badge">Layer 227</span>

TL name: `folder`  
Constructor ID: `0xff544e65`  
Returns: [Folder](/tl/types#folder)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `autofill_new_broadcasts` | `bool` *(flags.0)* | | 
| `autofill_public_groups` | `bool` *(flags.1)* | | 
| `autofill_new_correspondents` | `bool` *(flags.2)* | | 
| `id` | `int32` | | 
| `title` | `string` | | 
| `photo` | `ChatPhoto` *(flags.3)* | | 
