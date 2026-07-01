---
title: GetPersonalChannelHistory
description: TL method messages.getPersonalChannelHistory
---

# messages.getPersonalChannelHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x55fb0996`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetPersonalChannelHistoryRequest{
    user_id: nil, // InputUser
    limit: 0,
    max_id: 0,
    min_id: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
