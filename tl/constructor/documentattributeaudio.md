---
title: DocumentAttributeAudio
description: TL constructor documentAttributeAudio
---

# DocumentAttributeAudio

<span class="layer-badge">Layer 227</span>

TL name: `documentAttributeAudio`  
Constructor ID: `0x9852f9c6`  
Returns: [DocumentAttribute](/tl/types#documentattribute)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `voice` | `bool` *(flags.10)* | | 
| `duration` | `int32` | | 
| `title` | `string` *(flags.0)* | | 
| `performer` | `string` *(flags.1)* | | 
| `waveform` | `[]byte` *(flags.2)* | | 
