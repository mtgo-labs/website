---
title: MessageMediaPoll
description: TL constructor messageMediaPoll
---

# MessageMediaPoll

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaPoll`  
Constructor ID: `0x773f4e66`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `poll` | `Poll` | | 
| `results` | `PollResults` | | 
| `attached_media` | `MessageMedia` *(flags.0)* | | 
