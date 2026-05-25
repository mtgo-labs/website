---
title: DeleteChannel
description: TL method channels.deleteChannel
---

# channels.deleteChannel

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc0111fe3`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
