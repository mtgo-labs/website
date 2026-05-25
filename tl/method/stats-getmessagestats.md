---
title: GetMessageStats
description: TL method stats.getMessageStats
---

# stats.getMessageStats

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb6e0a3f5`  
Returns: [MessageStats](/tl/types#messagestats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessageStatsRequest{
    dark: false,
    channel: nil, // InputChannel
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
