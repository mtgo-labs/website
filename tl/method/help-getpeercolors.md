---
title: GetPeerColors
description: TL method help.getPeerColors
---

# help.getPeerColors

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xda80f42f`  
Returns: [PeerColors](/tl/types#peercolors)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerColorsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
