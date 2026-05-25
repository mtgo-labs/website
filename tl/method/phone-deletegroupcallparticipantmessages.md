---
title: DeleteGroupCallParticipantMessages
description: TL method phone.deleteGroupCallParticipantMessages
---

# phone.deleteGroupCallParticipantMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1dbfeca0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `report_spam` | `bool` *(flags.0, optional)* | | 
| `call` | `InputGroupCall` | | 
| `participant` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteGroupCallParticipantMessagesRequest{
    report_spam: false,
    call: nil, // InputGroupCall
    participant: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
