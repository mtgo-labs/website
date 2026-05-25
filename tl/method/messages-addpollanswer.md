---
title: AddPollAnswer
description: TL method messages.addPollAnswer
---

# messages.addPollAnswer

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x19bc4b6d`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `answer` | `PollAnswer` | | 

## Example

```go
result, err := client.Raw(&tg.AddPollAnswerRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    answer: nil, // PollAnswer
})
if err != nil {
    panic(err)
}
print(result)
```
