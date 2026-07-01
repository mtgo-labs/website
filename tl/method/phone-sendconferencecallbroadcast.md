---
title: SendConferenceCallBroadcast
description: TL method phone.sendConferenceCallBroadcast
---

# phone.sendConferenceCallBroadcast

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc6701900`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `block` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendConferenceCallBroadcastRequest{
    call: nil, // InputGroupCall
    block: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
