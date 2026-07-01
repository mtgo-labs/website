---
title: DeletePollAnswer
description: TL method messages.deletePollAnswer
---

# messages.deletePollAnswer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xac8505a5`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `option` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.DeletePollAnswerRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    option: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
