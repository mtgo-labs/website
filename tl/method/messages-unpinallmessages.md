---
title: UnpinAllMessages
description: TL method messages.unpinAllMessages
---

# messages.unpinAllMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x062dd747`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `saved_peer_id` | `InputPeer` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UnpinAllMessagesRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
    saved_peer_id: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
