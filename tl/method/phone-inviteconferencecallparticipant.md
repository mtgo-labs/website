---
title: InviteConferenceCallParticipant
description: TL method phone.inviteConferenceCallParticipant
---

# phone.inviteConferenceCallParticipant

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbcf22685`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `video` | `bool` *(flags.0, optional)* | | 
| `call` | `InputGroupCall` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.InviteConferenceCallParticipantRequest{
    video: false,
    call: nil, // InputGroupCall
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
