---
title: BotResults
description: TL constructor messages.botResults
---

# BotResults

<span class="layer-badge">Layer 225</span>

TL name: `messages.botResults`  
Constructor ID: `0xe021f2f6`  
Returns: [BotResults](/tl/types#botresults)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `gallery` | `bool` *(flags.0)* | | 
| `query_id` | `int64` | | 
| `next_offset` | `string` *(flags.1)* | | 
| `switch_pm` | `InlineBotSwitchPm` *(flags.2)* | | 
| `switch_webview` | `InlineBotWebView` *(flags.3)* | | 
| `results` | `[]BotInlineResult` | | 
| `cache_time` | `int32` | | 
| `users` | `[]User` | | 
