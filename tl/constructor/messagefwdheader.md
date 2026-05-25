---
title: MessageFwdHeader
description: TL constructor messageFwdHeader
---

# MessageFwdHeader

<span class="layer-badge">Layer 225</span>

TL name: `messageFwdHeader`  
Constructor ID: `0x4e4df4bb`  
Returns: [MessageFwdHeader](/tl/types#messagefwdheader)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `imported` | `bool` *(flags.7)* | | 
| `saved_out` | `bool` *(flags.11)* | | 
| `from_id` | `Peer` *(flags.0)* | | 
| `from_name` | `string` *(flags.5)* | | 
| `date` | `int32` | | 
| `channel_post` | `int32` *(flags.2)* | | 
| `post_author` | `string` *(flags.3)* | | 
| `saved_from_peer` | `Peer` *(flags.4)* | | 
| `saved_from_msg_id` | `int32` *(flags.4)* | | 
| `saved_from_id` | `Peer` *(flags.8)* | | 
| `saved_from_name` | `string` *(flags.9)* | | 
| `saved_date` | `int32` *(flags.10)* | | 
| `psa_type` | `string` *(flags.6)* | | 
