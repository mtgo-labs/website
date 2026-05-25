---
title: GetPeerProfileColors
description: TL method help.getPeerProfileColors
---

# help.getPeerProfileColors

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xabcfa9fd`  
Returns: [PeerColors](/tl/types#peercolors)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerProfileColorsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
