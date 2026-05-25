---
title: UpdatePaidMessagesPrice
description: TL method channels.updatePaidMessagesPrice
---

# channels.updatePaidMessagesPrice

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4b12327b`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `broadcast_messages_allowed` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 
| `send_paid_messages_stars` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.UpdatePaidMessagesPriceRequest{
    broadcast_messages_allowed: false,
    channel: nil, // InputChannel
    send_paid_messages_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
