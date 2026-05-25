---
title: JoinChannel
description: TL method channels.joinChannel
---

# channels.joinChannel

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x24b524c5`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.JoinChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
