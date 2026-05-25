---
title: GetConnectedStarRefBots
description: TL method payments.getConnectedStarRefBots
---

# payments.getConnectedStarRefBots

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5869a553`  
Returns: [ConnectedStarRefBots](/tl/types#connectedstarrefbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `offset_date` | `int32` *(flags.2, optional)* | | 
| `offset_link` | `string` *(flags.2, optional)* | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetConnectedStarRefBotsRequest{
    peer: nil, // InputPeer
    offset_date: 0,
    offset_link: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
