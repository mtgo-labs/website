---
title: ReplyKeyboardMarkup
description: TL constructor replyKeyboardMarkup
---

# ReplyKeyboardMarkup

<span class="layer-badge">Layer 227</span>

TL name: `replyKeyboardMarkup`  
Constructor ID: `0x85dd99d1`  
Returns: [ReplyMarkup](/tl/types#replymarkup)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `resize` | `bool` *(flags.0)* | | 
| `single_use` | `bool` *(flags.1)* | | 
| `selective` | `bool` *(flags.2)* | | 
| `persistent` | `bool` *(flags.4)* | | 
| `rows` | `[]KeyboardButtonRow` | | 
| `placeholder` | `string` *(flags.3)* | | 
