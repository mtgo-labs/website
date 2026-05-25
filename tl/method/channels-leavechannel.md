---
title: LeaveChannel
description: TL method channels.leaveChannel
---

# channels.leaveChannel

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf836aa95`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.LeaveChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
