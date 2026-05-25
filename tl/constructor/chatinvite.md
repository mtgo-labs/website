---
title: ChatInvite
description: TL constructor chatInvite
---

# ChatInvite

<span class="layer-badge">Layer 225</span>

TL name: `chatInvite`  
Constructor ID: `0x5c9d3702`  
Returns: [ChatInvite](/tl/types#chatinvite)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `channel` | `bool` *(flags.0)* | | 
| `broadcast` | `bool` *(flags.1)* | | 
| `public` | `bool` *(flags.2)* | | 
| `megagroup` | `bool` *(flags.3)* | | 
| `request_needed` | `bool` *(flags.6)* | | 
| `verified` | `bool` *(flags.7)* | | 
| `scam` | `bool` *(flags.8)* | | 
| `fake` | `bool` *(flags.9)* | | 
| `can_refulfill_subscription` | `bool` *(flags.11)* | | 
| `title` | `string` | | 
| `about` | `string` *(flags.5)* | | 
| `photo` | `Photo` | | 
| `participants_count` | `int32` | | 
| `participants` | `[]User` *(flags.4)* | | 
| `color` | `int32` | | 
| `subscription_pricing` | `StarsSubscriptionPricing` *(flags.10)* | | 
| `subscription_form_id` | `int64` *(flags.12)* | | 
| `bot_verification` | `BotVerification` *(flags.13)* | | 
