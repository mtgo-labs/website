---
title: KeyboardButtonRequestPeer
description: TL constructor keyboardButtonRequestPeer
---

# KeyboardButtonRequestPeer

<span class="layer-badge">Layer 227</span>

TL name: `keyboardButtonRequestPeer`  
Constructor ID: `0x5b0f15f5`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `style` | `KeyboardButtonStyle` *(flags.10)* | | 
| `text` | `string` | | 
| `button_id` | `int32` | | 
| `peer_type` | `RequestPeerType` | | 
| `max_quantity` | `int32` | | 
