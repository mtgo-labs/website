---
title: GetPeerStories
description: TL method stories.getPeerStories
---

# stories.getPeerStories

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2c4ada50`  
Returns: [PeerStories](/tl/types#peerstories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerStoriesRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
