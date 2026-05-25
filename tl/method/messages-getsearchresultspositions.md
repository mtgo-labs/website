---
title: GetSearchResultsPositions
description: TL method messages.getSearchResultsPositions
---

# messages.getSearchResultsPositions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9c7f2f10`  
Returns: [SearchResultsPositions](/tl/types#searchresultspositions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `saved_peer_id` | `InputPeer` *(flags.2, optional)* | | 
| `filter` | `MessagesFilter` | | 
| `offset_id` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetSearchResultsPositionsRequest{
    peer: nil, // InputPeer
    saved_peer_id: nil, // InputPeer
    filter: nil, // MessagesFilter
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
