---
title: MessageActionBotAllowed
description: TL constructor messageActionBotAllowed
---

# MessageActionBotAllowed

<span class="layer-badge">Layer 225</span>

TL name: `messageActionBotAllowed`  
Constructor ID: `0xc516d679`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `attach_menu` | `bool` *(flags.1)* | | 
| `from_request` | `bool` *(flags.3)* | | 
| `domain` | `string` *(flags.0)* | | 
| `app` | `BotApp` *(flags.2)* | | 
