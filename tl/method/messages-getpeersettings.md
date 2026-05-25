---
title: GetPeerSettings
description: TL method messages.getPeerSettings
---

# messages.getPeerSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xefd9a6a2`  
Returns: [PeerSettings](/tl/types#peersettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerSettingsRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
