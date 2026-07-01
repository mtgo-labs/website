---
title: GetMessagePublicForwards
description: TL method stats.getMessagePublicForwards
---

# stats.getMessagePublicForwards

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5f150144`  
Returns: [PublicForwards](/tl/types#publicforwards)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `msg_id` | `int32` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessagePublicForwardsRequest{
    channel: nil, // InputChannel
    msg_id: 0,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
