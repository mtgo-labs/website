---
title: ProlongWebView
description: TL method messages.prolongWebView
---

# messages.prolongWebView

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb0d81a83`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.5, optional)* | | 
| `peer` | `InputPeer` | | 
| `bot` | `InputUser` | | 
| `query_id` | `int64` | | 
| `reply_to` | `InputReplyTo` *(flags.0, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ProlongWebViewRequest{
    silent: false,
    peer: nil, // InputPeer
    bot: nil, // InputUser
    query_id: 0,
    reply_to: nil, // InputReplyTo
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
