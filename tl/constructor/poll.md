---
title: Poll
description: TL constructor poll
---

# Poll

<span class="layer-badge">Layer 225</span>

TL name: `poll`  
Constructor ID: `0x966e2dbf`  
Returns: [Poll](/tl/types#poll)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | `int64` | | 
| `flags` | `uint32` | | 
| `closed` | `bool` *(flags.0)* | | 
| `public_voters` | `bool` *(flags.1)* | | 
| `multiple_choice` | `bool` *(flags.2)* | | 
| `quiz` | `bool` *(flags.3)* | | 
| `open_answers` | `bool` *(flags.6)* | | 
| `revoting_disabled` | `bool` *(flags.7)* | | 
| `shuffle_answers` | `bool` *(flags.8)* | | 
| `hide_results_until_close` | `bool` *(flags.9)* | | 
| `creator` | `bool` *(flags.10)* | | 
| `subscribers_only` | `bool` *(flags.11)* | | 
| `question` | `TextWithEntities` | | 
| `answers` | `[]PollAnswer` | | 
| `close_period` | `int32` *(flags.4)* | | 
| `close_date` | `int32` *(flags.5)* | | 
| `countries_iso2` | `[]string` *(flags.12)* | | 
| `hash` | `int64` | | 
