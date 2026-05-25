---
title: ToggleNoForwards
description: TL method messages.toggleNoForwards
---

# messages.toggleNoForwards

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb2081a35`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `enabled` | `bool` | | 
| `request_msg_id` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ToggleNoForwardsRequest{
    peer: nil, // InputPeer
    enabled: false,
    request_msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
