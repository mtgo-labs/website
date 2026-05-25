---
title: GetOutboxReadDate
description: TL method messages.getOutboxReadDate
---

# messages.getOutboxReadDate

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8c4bfe5d`  
Returns: [OutboxReadDate](/tl/types#outboxreaddate)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetOutboxReadDateRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
