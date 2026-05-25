---
title: ChatInviteExported
description: TL constructor chatInviteExported
---

# ChatInviteExported

<span class="layer-badge">Layer 225</span>

TL name: `chatInviteExported`  
Constructor ID: `0xa22cbd96`  
Returns: [ExportedChatInvite](/tl/types#exportedchatinvite)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `revoked` | `bool` *(flags.0)* | | 
| `permanent` | `bool` *(flags.5)* | | 
| `request_needed` | `bool` *(flags.6)* | | 
| `link` | `string` | | 
| `admin_id` | `int64` | | 
| `date` | `int32` | | 
| `start_date` | `int32` *(flags.4)* | | 
| `expire_date` | `int32` *(flags.1)* | | 
| `usage_limit` | `int32` *(flags.2)* | | 
| `usage` | `int32` *(flags.3)* | | 
| `requested` | `int32` *(flags.7)* | | 
| `subscription_expired` | `int32` *(flags.10)* | | 
| `title` | `string` *(flags.8)* | | 
| `subscription_pricing` | `StarsSubscriptionPricing` *(flags.9)* | | 
