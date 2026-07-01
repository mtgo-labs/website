---
title: GetDiscussionMessage
description: TL method messages.getDiscussionMessage
---

# messages.getDiscussionMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x446972fd`  
Returns: [DiscussionMessage](/tl/types#discussionmessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetDiscussionMessageRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
