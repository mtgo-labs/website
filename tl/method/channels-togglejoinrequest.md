---
title: ToggleJoinRequest
description: TL method channels.toggleJoinRequest
---

# channels.toggleJoinRequest

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0ecc2618`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `apply_to_invites` | `bool` *(flags.1, optional)* | | 
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 
| `guard_bot` | `InputUser` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ToggleJoinRequestRequest{
    apply_to_invites: false,
    channel: nil, // InputChannel
    enabled: false,
    guard_bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
