---
title: ReceivedMessages
description: TL method messages.receivedMessages
---

# messages.receivedMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x05a954c0`  
Returns: [ReceivedNotifyMessage](/tl/types#receivednotifymessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReceivedMessagesRequest{
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
