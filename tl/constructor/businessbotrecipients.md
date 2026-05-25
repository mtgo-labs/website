---
title: BusinessBotRecipients
description: TL constructor businessBotRecipients
---

# BusinessBotRecipients

<span class="layer-badge">Layer 225</span>

TL name: `businessBotRecipients`  
Constructor ID: `0xb88cf373`  
Returns: [BusinessBotRecipients](/tl/types#businessbotrecipients)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `existing_chats` | `bool` *(flags.0)* | | 
| `new_chats` | `bool` *(flags.1)* | | 
| `contacts` | `bool` *(flags.2)* | | 
| `non_contacts` | `bool` *(flags.3)* | | 
| `exclude_selected` | `bool` *(flags.5)* | | 
| `users` | `[]int64` *(flags.4)* | | 
| `exclude_users` | `[]int64` *(flags.6)* | | 
