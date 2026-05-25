---
title: SendBotRequestedPeer
description: TL method messages.sendBotRequestedPeer
---

# messages.sendBotRequestedPeer

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6c5cf2a7`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` *(flags.0, optional)* | | 
| `webapp_req_id` | `string` *(flags.1, optional)* | | 
| `button_id` | `int32` | | 
| `requested_peers` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.SendBotRequestedPeerRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    webapp_req_id: "",
    button_id: 0,
    requested_peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
