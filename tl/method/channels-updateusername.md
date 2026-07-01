---
title: UpdateUsername
description: TL method channels.updateUsername
---

# channels.updateUsername

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3514b3de`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `username` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateUsernameRequest{
    channel: nil, // InputChannel
    username: "",
})
if err != nil {
    panic(err)
}
print(result)
```
