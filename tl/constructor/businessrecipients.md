---
title: BusinessRecipients
description: TL constructor businessRecipients
---

# BusinessRecipients

<span class="layer-badge">Layer 227</span>

TL name: `businessRecipients`  
Constructor ID: `0x21108ff7`  
Returns: [BusinessRecipients](/tl/types#businessrecipients)

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
