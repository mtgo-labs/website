---
title: InputBusinessBotRecipients
description: TL constructor inputBusinessBotRecipients
---

# InputBusinessBotRecipients

<span class="layer-badge">Layer 225</span>

TL name: `inputBusinessBotRecipients`  
Constructor ID: `0xc4e5921e`  
Returns: [InputBusinessBotRecipients](/tl/types#inputbusinessbotrecipients)

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
| `exclude_users` | `[]InputUser` *(flags.6)* | | 
