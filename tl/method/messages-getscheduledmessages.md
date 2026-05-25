---
title: GetScheduledMessages
description: TL method messages.getScheduledMessages
---

# messages.getScheduledMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbdbb0464`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetScheduledMessagesRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
