---
title: DeleteConferenceCallParticipants
description: TL method phone.deleteConferenceCallParticipants
---

# phone.deleteConferenceCallParticipants

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8ca60525`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `only_left` | `bool` *(flags.0, optional)* | | 
| `kick` | `bool` *(flags.1, optional)* | | 
| `call` | `InputGroupCall` | | 
| `ids` | `[]int64` | | 
| `block` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteConferenceCallParticipantsRequest{
    only_left: false,
    kick: false,
    call: nil, // InputGroupCall
    ids: nil,
    block: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
