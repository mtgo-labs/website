---
title: ConnectStarRefBot
description: TL method payments.connectStarRefBot
---

# payments.connectStarRefBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7ed5348a`  
Returns: [ConnectedStarRefBots](/tl/types#connectedstarrefbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.ConnectStarRefBotRequest{
    peer: nil, // InputPeer
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
