---
title: ToggleSlowMode
description: TL method channels.toggleSlowMode
---

# channels.toggleSlowMode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xedd49ef0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `seconds` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleSlowModeRequest{
    channel: nil, // InputChannel
    seconds: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
