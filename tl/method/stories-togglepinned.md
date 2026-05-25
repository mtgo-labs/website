---
title: TogglePinned
description: TL method stories.togglePinned
---

# stories.togglePinned

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9a75a1ef`  
Returns: [Int](/tl/types#int)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 
| `pinned` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePinnedRequest{
    peer: nil, // InputPeer
    id: nil,
    pinned: false,
})
if err != nil {
    panic(err)
}
print(result)
```
