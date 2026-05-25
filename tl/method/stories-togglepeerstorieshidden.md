---
title: TogglePeerStoriesHidden
description: TL method stories.togglePeerStoriesHidden
---

# stories.togglePeerStoriesHidden

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbd0415c4`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `hidden` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePeerStoriesHiddenRequest{
    peer: nil, // InputPeer
    hidden: false,
})
if err != nil {
    panic(err)
}
print(result)
```
