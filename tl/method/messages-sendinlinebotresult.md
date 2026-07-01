---
title: SendInlineBotResult
description: TL method messages.sendInlineBotResult
---

# messages.sendInlineBotResult

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc0cf7646`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.5, optional)* | | 
| `background` | `bool` *(flags.6, optional)* | | 
| `clear_draft` | `bool` *(flags.7, optional)* | | 
| `hide_via` | `bool` *(flags.11, optional)* | | 
| `peer` | `InputPeer` | | 
| `reply_to` | `InputReplyTo` *(flags.0, optional)* | | 
| `random_id` | `int64` | | 
| `query_id` | `int64` | | 
| `id` | `string` | | 
| `schedule_date` | `int32` *(flags.10, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 
| `quick_reply_shortcut` | `InputQuickReplyShortcut` *(flags.17, optional)* | | 
| `allow_paid_stars` | `int64` *(flags.21, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendInlineBotResultRequest{
    silent: false,
    background: false,
    clear_draft: false,
    hide_via: false,
    peer: nil, // InputPeer
    reply_to: nil, // InputReplyTo
    random_id: 0,
    query_id: 0,
    id: "",
    schedule_date: 0,
    send_as: nil, // InputPeer
    quick_reply_shortcut: nil, // InputQuickReplyShortcut
    allow_paid_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
