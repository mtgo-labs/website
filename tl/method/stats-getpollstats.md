---
title: GetPollStats
description: TL method stats.getPollStats
---

# stats.getPollStats

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc27dfa68`  
Returns: [PollStats](/tl/types#pollstats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPollStatsRequest{
    dark: false,
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
