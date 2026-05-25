---
title: SearchResultsCalendar
description: TL constructor messages.searchResultsCalendar
---

# SearchResultsCalendar

<span class="layer-badge">Layer 225</span>

TL name: `messages.searchResultsCalendar`  
Constructor ID: `0x147ee23c`  
Returns: [SearchResultsCalendar](/tl/types#searchresultscalendar)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inexact` | `bool` *(flags.0)* | | 
| `count` | `int32` | | 
| `min_date` | `int32` | | 
| `min_msg_id` | `int32` | | 
| `offset_id_offset` | `int32` *(flags.1)* | | 
| `periods` | `[]SearchResultsCalendarPeriod` | | 
| `messages` | `[]Message` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
