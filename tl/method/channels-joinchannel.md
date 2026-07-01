---
title: JoinChannel
description: TL method channels.joinChannel
---

# channels.joinChannel

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7f6a1e22`  
Returns: [ChatInviteJoinResult](/tl/types#chatinvitejoinresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.JoinChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
