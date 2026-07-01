---
title: ReadDiscussion
description: TL method messages.readDiscussion
---

# messages.readDiscussion

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf731a9f4`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `read_max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadDiscussionRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    read_max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
