---
title: InputStorePaymentAuthCode
description: TL constructor inputStorePaymentAuthCode
---

# InputStorePaymentAuthCode

<span class="layer-badge">Layer 225</span>

TL name: `inputStorePaymentAuthCode`  
Constructor ID: `0x3fc18057`  
Returns: [InputStorePaymentPurpose](/tl/types#inputstorepaymentpurpose)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `restore` | `bool` *(flags.0)* | | 
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `premium_days` | `int32` | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
