---
title: ToggleJoinRequest
description: TL method channels.toggleJoinRequest
---

# channels.toggleJoinRequest

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4c2985b6`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleJoinRequestRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
