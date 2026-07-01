---
title: GetPollResults
description: TL method messages.getPollResults
---

# messages.getPollResults

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xeda3e33b`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `poll_hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetPollResultsRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    poll_hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
