---
title: InputKeyboardButtonRequestPeer
description: TL constructor inputKeyboardButtonRequestPeer
---

# InputKeyboardButtonRequestPeer

<span class="layer-badge">Layer 227</span>

TL name: `inputKeyboardButtonRequestPeer`  
Constructor ID: `0x02b78156`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name_requested` | `bool` *(flags.0)* | | 
| `username_requested` | `bool` *(flags.1)* | | 
| `photo_requested` | `bool` *(flags.2)* | | 
| `style` | `KeyboardButtonStyle` *(flags.10)* | | 
| `text` | `string` | | 
| `button_id` | `int32` | | 
| `peer_type` | `RequestPeerType` | | 
| `max_quantity` | `int32` | | 
