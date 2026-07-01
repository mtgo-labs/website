---
title: GetSearchCounters
description: TL method messages.getSearchCounters
---

# messages.getSearchCounters

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1bbcf300`  
Returns: [SearchCounter](/tl/types#searchcounter)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `saved_peer_id` | `InputPeer` *(flags.2, optional)* | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `filters` | `[]MessagesFilter` | | 

## Example

```go
result, err := client.Raw(&tg.GetSearchCountersRequest{
    peer: nil, // InputPeer
    saved_peer_id: nil, // InputPeer
    top_msg_id: 0,
    filters: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
