---
title: SendVote
description: TL method messages.sendVote
---

# messages.sendVote

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x10ea6184`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `options` | `[][]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendVoteRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    options: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
