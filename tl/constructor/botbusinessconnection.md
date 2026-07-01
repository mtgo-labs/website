---
title: BotBusinessConnection
description: TL constructor botBusinessConnection
---

# BotBusinessConnection

<span class="layer-badge">Layer 227</span>

TL name: `botBusinessConnection`  
Constructor ID: `0x8f34b2f5`  
Returns: [BotBusinessConnection](/tl/types#botbusinessconnection)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `disabled` | `bool` *(flags.1)* | | 
| `connection_id` | `string` | | 
| `user_id` | `int64` | | 
| `dc_id` | `int32` | | 
| `date` | `int32` | | 
| `rights` | `BusinessBotRights` *(flags.2)* | | 
