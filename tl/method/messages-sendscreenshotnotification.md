---
title: SendScreenshotNotification
description: TL method messages.sendScreenshotNotification
---

# messages.sendScreenshotNotification

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa1405817`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `reply_to` | `InputReplyTo` | | 
| `random_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SendScreenshotNotificationRequest{
    peer: nil, // InputPeer
    reply_to: nil, // InputReplyTo
    random_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
