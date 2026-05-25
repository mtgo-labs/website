---
title: GetUnreadPollVotes
description: TL method messages.getUnreadPollVotes
---

# messages.getUnreadPollVotes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x43286cf2`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `offset_id` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetUnreadPollVotesRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
    offset_id: 0,
    add_offset: 0,
    limit: 0,
    max_id: 0,
    min_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
