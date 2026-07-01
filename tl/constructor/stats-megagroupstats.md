---
title: MegagroupStats
description: TL constructor stats.megagroupStats
---

# MegagroupStats

<span class="layer-badge">Layer 227</span>

TL name: `stats.megagroupStats`  
Constructor ID: `0xef7ff916`  
Returns: [MegagroupStats](/tl/types#megagroupstats)

## Fields

| Field | Type | Description |
|---|---|---|
| `period` | `StatsDateRangeDays` | | 
| `members` | `StatsAbsValueAndPrev` | | 
| `messages` | `StatsAbsValueAndPrev` | | 
| `viewers` | `StatsAbsValueAndPrev` | | 
| `posters` | `StatsAbsValueAndPrev` | | 
| `growth_graph` | `StatsGraph` | | 
| `members_graph` | `StatsGraph` | | 
| `new_members_by_source_graph` | `StatsGraph` | | 
| `languages_graph` | `StatsGraph` | | 
| `messages_graph` | `StatsGraph` | | 
| `actions_graph` | `StatsGraph` | | 
| `top_hours_graph` | `StatsGraph` | | 
| `weekdays_graph` | `StatsGraph` | | 
| `top_posters` | `[]StatsGroupTopPoster` | | 
| `top_admins` | `[]StatsGroupTopAdmin` | | 
| `top_inviters` | `[]StatsGroupTopInviter` | | 
| `users` | `[]User` | | 
