---
title: ToggleConnectedBotPaused
description: TL method account.toggleConnectedBotPaused
---

# account.toggleConnectedBotPaused

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x646e1097`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `paused` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleConnectedBotPausedRequest{
    peer: nil, // InputPeer
    paused: false,
})
if err != nil {
    panic(err)
}
print(result)
```
