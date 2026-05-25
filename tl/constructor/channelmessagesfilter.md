---
title: ChannelMessagesFilter
description: TL constructor channelMessagesFilter
---

# ChannelMessagesFilter

<span class="layer-badge">Layer 225</span>

TL name: `channelMessagesFilter`  
Constructor ID: `0xcd77d957`  
Returns: [ChannelMessagesFilter](/tl/types#channelmessagesfilter)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `exclude_new_messages` | `bool` *(flags.1)* | | 
| `ranges` | `[]MessageRange` | | 
