---
title: UpdateServiceNotification
description: TL constructor updateServiceNotification
---

# UpdateServiceNotification

<span class="layer-badge">Layer 227</span>

TL name: `updateServiceNotification`  
Constructor ID: `0xebe46819`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `popup` | `bool` *(flags.0)* | | 
| `invert_media` | `bool` *(flags.2)* | | 
| `inbox_date` | `int32` *(flags.1)* | | 
| `type` | `string` | | 
| `message` | `string` | | 
| `media` | `MessageMedia` | | 
| `entities` | `[]MessageEntity` | | 
