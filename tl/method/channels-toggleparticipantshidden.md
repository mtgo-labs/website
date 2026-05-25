---
title: ToggleParticipantsHidden
description: TL method channels.toggleParticipantsHidden
---

# channels.toggleParticipantsHidden

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6a6e7854`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleParticipantsHiddenRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
