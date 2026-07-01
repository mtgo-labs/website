---
title: KeyboardButtonSwitchInline
description: TL constructor keyboardButtonSwitchInline
---

# KeyboardButtonSwitchInline

<span class="layer-badge">Layer 227</span>

TL name: `keyboardButtonSwitchInline`  
Constructor ID: `0x991399fc`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `same_peer` | `bool` *(flags.0)* | | 
| `style` | `KeyboardButtonStyle` *(flags.10)* | | 
| `text` | `string` | | 
| `query` | `string` | | 
| `peer_types` | `[]InlineQueryPeerType` *(flags.1)* | | 
