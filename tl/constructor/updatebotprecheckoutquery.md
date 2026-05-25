---
title: UpdateBotPrecheckoutQuery
description: TL constructor updateBotPrecheckoutQuery
---

# UpdateBotPrecheckoutQuery

<span class="layer-badge">Layer 225</span>

TL name: `updateBotPrecheckoutQuery`  
Constructor ID: `0x8caa9a96`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `query_id` | `int64` | | 
| `user_id` | `int64` | | 
| `payload` | `[]byte` | | 
| `info` | `PaymentRequestedInfo` *(flags.0)* | | 
| `shipping_option_id` | `string` *(flags.1)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
