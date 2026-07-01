---
title: EditConnectedStarRefBot
description: TL method payments.editConnectedStarRefBot
---

# payments.editConnectedStarRefBot

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe4fca4a3`  
Returns: [ConnectedStarRefBots](/tl/types#connectedstarrefbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoked` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `link` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditConnectedStarRefBotRequest{
    revoked: false,
    peer: nil, // InputPeer
    link: "",
})
if err != nil {
    panic(err)
}
print(result)
```
