---
title: InputKeyboardButtonURLAuth
description: TL constructor inputKeyboardButtonUrlAuth
---

# InputKeyboardButtonURLAuth

<span class="layer-badge">Layer 225</span>

TL name: `inputKeyboardButtonUrlAuth`  
Constructor ID: `0x68013e72`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `request_write_access` | `bool` *(flags.0)* | | 
| `style` | `KeyboardButtonStyle` *(flags.10)* | | 
| `text` | `string` | | 
| `fwd_text` | `string` *(flags.1)* | | 
| `url` | `string` | | 
| `bot` | `InputUser` | | 
