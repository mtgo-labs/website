---
title: ReadHistory
description: TL method messages.readHistory
---

# messages.readHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0e306d3a`  
Returns: [AffectedMessages](/tl/types#affectedmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadHistoryRequest{
    peer: nil, // InputPeer
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
