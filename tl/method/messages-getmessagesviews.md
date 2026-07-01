---
title: GetMessagesViews
description: TL method messages.getMessagesViews
---

# messages.getMessagesViews

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5784d3e1`  
Returns: [MessageViews](/tl/types#messageviews)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 
| `increment` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessagesViewsRequest{
    peer: nil, // InputPeer
    id: nil,
    increment: false,
})
if err != nil {
    panic(err)
}
print(result)
```
