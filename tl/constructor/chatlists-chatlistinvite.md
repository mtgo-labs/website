---
title: ChatlistInvite
description: TL constructor chatlists.chatlistInvite
---

# ChatlistInvite

<span class="layer-badge">Layer 227</span>

TL name: `chatlists.chatlistInvite`  
Constructor ID: `0xf10ece2f`  
Returns: [ChatlistInvite](/tl/types#chatlistinvite)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `title_noanimate` | `bool` *(flags.1)* | | 
| `title` | `TextWithEntities` | | 
| `emoticon` | `string` *(flags.0)* | | 
| `peers` | `[]Peer` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
