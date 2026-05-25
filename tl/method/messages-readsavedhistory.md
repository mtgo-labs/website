---
title: ReadSavedHistory
description: TL method messages.readSavedHistory
---

# messages.readSavedHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xba4a3b5b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` | | 
| `peer` | `InputPeer` | | 
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadSavedHistoryRequest{
    parent_peer: nil, // InputPeer
    peer: nil, // InputPeer
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
