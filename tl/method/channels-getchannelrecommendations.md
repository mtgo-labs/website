---
title: GetChannelRecommendations
description: TL method channels.getChannelRecommendations
---

# channels.getChannelRecommendations

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x25a71742`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetChannelRecommendationsRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
