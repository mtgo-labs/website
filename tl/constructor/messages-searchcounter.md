---
title: SearchCounter
description: TL constructor messages.searchCounter
---

# SearchCounter

<span class="layer-badge">Layer 227</span>

TL name: `messages.searchCounter`  
Constructor ID: `0xe844ebff`  
Returns: [SearchCounter](/tl/types#searchcounter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inexact` | `bool` *(flags.1)* | | 
| `filter` | `MessagesFilter` | | 
| `count` | `int32` | | 
