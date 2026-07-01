---
title: InviteToChannel
description: TL method channels.inviteToChannel
---

# channels.inviteToChannel

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc9e33d54`  
Returns: [InvitedUsers](/tl/types#invitedusers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `users` | `[]InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.InviteToChannelRequest{
    channel: nil, // InputChannel
    users: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
