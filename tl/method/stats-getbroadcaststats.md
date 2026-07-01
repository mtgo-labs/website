---
title: GetBroadcastStats
description: TL method stats.getBroadcastStats
---

# stats.getBroadcastStats

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xab42441a`  
Returns: [BroadcastStats](/tl/types#broadcaststats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.GetBroadcastStatsRequest{
    dark: false,
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
