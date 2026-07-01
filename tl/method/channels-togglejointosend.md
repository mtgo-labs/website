---
title: ToggleJoinToSend
description: TL method channels.toggleJoinToSend
---

# channels.toggleJoinToSend

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe4cb9580`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleJoinToSendRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
