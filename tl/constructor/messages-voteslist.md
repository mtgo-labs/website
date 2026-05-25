---
title: VotesList
description: TL constructor messages.votesList
---

# VotesList

<span class="layer-badge">Layer 225</span>

TL name: `messages.votesList`  
Constructor ID: `0x4899484e`  
Returns: [VotesList](/tl/types#voteslist)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `count` | `int32` | | 
| `votes` | `[]MessagePeerVote` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
| `next_offset` | `string` *(flags.0)* | | 
