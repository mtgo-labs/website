---
title: SendQuickReplyMessages
description: TL method messages.sendQuickReplyMessages
---

# messages.sendQuickReplyMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6c750de1`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `shortcut_id` | `int32` | | 
| `id` | `[]int32` | | 
| `random_id` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.SendQuickReplyMessagesRequest{
    peer: nil, // InputPeer
    shortcut_id: 0,
    id: nil,
    random_id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
