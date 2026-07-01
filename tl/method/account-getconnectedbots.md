---
title: GetConnectedBots
description: TL method account.getConnectedBots
---

# account.getConnectedBots

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4ea4c80f`  
Returns: [ConnectedBots](/tl/types#connectedbots)

## Example

```go
result, err := client.Raw(&tg.GetConnectedBotsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
