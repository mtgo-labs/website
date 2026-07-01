---
title: SendPaidReaction
description: TL method messages.sendPaidReaction
---

# messages.sendPaidReaction

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x58bbcb50`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `count` | `int32` | | 
| `random_id` | `int64` | | 
| `private` | `PaidReactionPrivacy` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendPaidReactionRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    count: 0,
    random_id: 0,
    private: nil, // PaidReactionPrivacy
})
if err != nil {
    panic(err)
}
print(result)
```
