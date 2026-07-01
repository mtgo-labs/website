---
title: AcceptCall
description: TL method phone.acceptCall
---

# phone.acceptCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3bd2b4a0`  
Returns: [PhoneCall](/tl/types#phonecall)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 
| `g_b` | `[]byte` | | 
| `protocol` | `PhoneCallProtocol` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptCallRequest{
    peer: nil, // InputPhoneCall
    g_b: nil,
    protocol: nil, // PhoneCallProtocol
})
if err != nil {
    panic(err)
}
print(result)
```
