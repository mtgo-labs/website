---
title: DeleteParticipantHistory
description: TL method channels.deleteParticipantHistory
---

# channels.deleteParticipantHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x367544db`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `participant` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteParticipantHistoryRequest{
    channel: nil, // InputChannel
    participant: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
