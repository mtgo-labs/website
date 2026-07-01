---
title: GetSponsoredMessages
description: TL method messages.getSponsoredMessages
---

# messages.getSponsoredMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3d6ce850`  
Returns: [SponsoredMessages](/tl/types#sponsoredmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetSponsoredMessagesRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
