---
title: ToggleUsername
description: TL method channels.toggleUsername
---

# channels.toggleUsername

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x50f24105`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `username` | `string` | | 
| `active` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleUsernameRequest{
    channel: nil, // InputChannel
    username: "",
    active: false,
})
if err != nil {
    panic(err)
}
print(result)
```
