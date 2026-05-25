---
title: ReceivedQueue
description: TL method messages.receivedQueue
---

# messages.receivedQueue

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x55a5bb66`  
Returns: [Long](/tl/types#long)

## Parameters

| Name | Type | Description |
|---|---|---|
| `max_qts` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReceivedQueueRequest{
    max_qts: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
