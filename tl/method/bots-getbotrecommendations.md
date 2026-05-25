---
title: GetBotRecommendations
description: TL method bots.getBotRecommendations
---

# bots.getBotRecommendations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa1b70815`  
Returns: [Users](/tl/types#users)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotRecommendationsRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
