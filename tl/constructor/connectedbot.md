---
title: ConnectedBot
description: TL constructor connectedBot
---

# ConnectedBot

<span class="layer-badge">Layer 227</span>

TL name: `connectedBot`  
Constructor ID: `0x033ed001`  
Returns: [ConnectedBot](/tl/types#connectedbot)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `bot_id` | `int64` | | 
| `recipients` | `BusinessBotRecipients` | | 
| `rights` | `BusinessBotRights` | | 
| `device` | `string` *(flags.0)* | | 
| `date` | `int32` *(flags.1)* | | 
| `location` | `string` *(flags.2)* | | 
