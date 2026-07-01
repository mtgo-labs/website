---
title: ToggleAntiSpam
description: TL method channels.toggleAntiSpam
---

# channels.toggleAntiSpam

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x68f3e4eb`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleAntiSpamRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
