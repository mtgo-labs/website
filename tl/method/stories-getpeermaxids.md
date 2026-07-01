---
title: GetPeerMaxIDs
description: TL method stories.getPeerMaxIDs
---

# stories.getPeerMaxIDs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x78499170`  
Returns: [RecentStory](/tl/types#recentstory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerMaxIDsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
