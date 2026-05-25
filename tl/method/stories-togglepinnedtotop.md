---
title: TogglePinnedToTop
description: TL method stories.togglePinnedToTop
---

# stories.togglePinnedToTop

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0b297e9b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePinnedToTopRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
