---
title: GetConnectedStarRefBot
description: TL method payments.getConnectedStarRefBot
---

# payments.getConnectedStarRefBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb7d998f0`  
Returns: [ConnectedStarRefBots](/tl/types#connectedstarrefbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetConnectedStarRefBotRequest{
    peer: nil, // InputPeer
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
