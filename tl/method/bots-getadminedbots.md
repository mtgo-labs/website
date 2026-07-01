---
title: GetAdminedBots
description: TL method bots.getAdminedBots
---

# bots.getAdminedBots

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb0711d83`  
Returns: [User](/tl/types#user)

## Example

```go
result, err := client.Raw(&tg.GetAdminedBotsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
