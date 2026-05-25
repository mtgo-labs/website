---
title: ReadPollVotes
description: TL method messages.readPollVotes
---

# messages.readPollVotes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1720b4d8`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ReadPollVotesRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
