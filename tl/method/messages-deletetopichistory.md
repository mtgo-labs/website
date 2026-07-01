---
title: DeleteTopicHistory
description: TL method messages.deleteTopicHistory
---

# messages.deleteTopicHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd2816f10`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteTopicHistoryRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
