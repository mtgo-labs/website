---
title: GetPopularAppBots
description: TL method bots.getPopularAppBots
---

# bots.getPopularAppBots

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc2510192`  
Returns: [PopularAppBots](/tl/types#popularappbots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPopularAppBotsRequest{
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
