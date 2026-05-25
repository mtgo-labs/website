---
title: InputKeyboardButtonRequestPeer
description: TL constructor inputKeyboardButtonRequestPeer
---

# InputKeyboardButtonRequestPeer

<span class="layer-badge">Layer 225</span>

TL name: `inputKeyboardButtonRequestPeer`  
Constructor ID: `0xc9662d05`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name_requested` | `bool` *(flags.0)* | | 
| `username_requested` | `bool` *(flags.1)* | | 
| `photo_requested` | `bool` *(flags.2)* | | 
| `text` | `string` | | 
| `button_id` | `int32` | | 
| `peer_type` | `RequestPeerType` | | 
| `max_quantity` | `int32` | | 
