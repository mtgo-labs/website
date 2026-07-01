---
title: UpdateNewAuthorization
description: TL constructor updateNewAuthorization
---

# UpdateNewAuthorization

<span class="layer-badge">Layer 227</span>

TL name: `updateNewAuthorization`  
Constructor ID: `0x8951abef`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `unconfirmed` | `bool` *(flags.0)* | | 
| `hash` | `int64` | | 
| `date` | `int32` *(flags.0)* | | 
| `device` | `string` *(flags.0)* | | 
| `location` | `string` *(flags.0)* | | 
