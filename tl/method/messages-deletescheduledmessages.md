---
title: DeleteScheduledMessages
description: TL method messages.deleteScheduledMessages
---

# messages.deleteScheduledMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x59ae2b16`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteScheduledMessagesRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
