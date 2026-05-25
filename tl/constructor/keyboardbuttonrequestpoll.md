---
title: KeyboardButtonRequestPoll
description: TL constructor keyboardButtonRequestPoll
---

# KeyboardButtonRequestPoll

<span class="layer-badge">Layer 225</span>

TL name: `keyboardButtonRequestPoll`  
Constructor ID: `0x7a11d782`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `style` | `KeyboardButtonStyle` *(flags.10)* | | 
| `quiz` | `bool` *(flags.0)* | | 
| `text` | `string` | | 
