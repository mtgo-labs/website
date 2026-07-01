---
title: BotInlineMessageMediaInvoice
description: TL constructor botInlineMessageMediaInvoice
---

# BotInlineMessageMediaInvoice

<span class="layer-badge">Layer 227</span>

TL name: `botInlineMessageMediaInvoice`  
Constructor ID: `0x354a9b09`  
Returns: [BotInlineMessage](/tl/types#botinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `shipping_address_requested` | `bool` *(flags.1)* | | 
| `test` | `bool` *(flags.3)* | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.0)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
