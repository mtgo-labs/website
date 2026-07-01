---
title: SendGroupCallMessage
description: TL method phone.sendGroupCallMessage
---

# phone.sendGroupCallMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb1d11410`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `random_id` | `int64` | | 
| `message` | `TextWithEntities` | | 
| `allow_paid_stars` | `int64` *(flags.0, optional)* | | 
| `send_as` | `InputPeer` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendGroupCallMessageRequest{
    call: nil, // InputGroupCall
    random_id: 0,
    message: nil, // TextWithEntities
    allow_paid_stars: 0,
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
