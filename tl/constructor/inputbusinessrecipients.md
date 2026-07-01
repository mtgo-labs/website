---
title: InputBusinessRecipients
description: TL constructor inputBusinessRecipients
---

# InputBusinessRecipients

<span class="layer-badge">Layer 227</span>

TL name: `inputBusinessRecipients`  
Constructor ID: `0x6f8b32aa`  
Returns: [InputBusinessRecipients](/tl/types#inputbusinessrecipients)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `existing_chats` | `bool` *(flags.0)* | | 
| `new_chats` | `bool` *(flags.1)* | | 
| `contacts` | `bool` *(flags.2)* | | 
| `non_contacts` | `bool` *(flags.3)* | | 
| `exclude_selected` | `bool` *(flags.5)* | | 
| `users` | `[]InputUser` *(flags.4)* | | 
