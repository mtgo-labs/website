---
title: EditBanned
description: TL method channels.editBanned
---

# channels.editBanned

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x96e6cd81`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `participant` | `InputPeer` | | 
| `banned_rights` | `ChatBannedRights` | | 

## Example

```go
result, err := client.Raw(&tg.EditBannedRequest{
    channel: nil, // InputChannel
    participant: nil, // InputPeer
    banned_rights: nil, // ChatBannedRights
})
if err != nil {
    panic(err)
}
print(result)
```
