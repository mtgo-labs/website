---
title: SendScheduledMessages
description: TL method messages.sendScheduledMessages
---

# messages.sendScheduledMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbd38850a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.SendScheduledMessagesRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
