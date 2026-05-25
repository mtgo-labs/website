---
title: GetGroupParticipants
description: TL method phone.getGroupParticipants
---

# phone.getGroupParticipants

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc558d8ab`  
Returns: [GroupParticipants](/tl/types#groupparticipants)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `ids` | `[]InputPeer` | | 
| `sources` | `[]int32` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupParticipantsRequest{
    call: nil, // InputGroupCall
    ids: nil,
    sources: nil,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
