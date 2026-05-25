---
title: GetRecentLocations
description: TL method messages.getRecentLocations
---

# messages.getRecentLocations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x702a40e0`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetRecentLocationsRequest{
    peer: nil, // InputPeer
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
