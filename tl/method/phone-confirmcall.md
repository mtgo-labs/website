---
title: ConfirmCall
description: TL method phone.confirmCall
---

# phone.confirmCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2efe1722`  
Returns: [PhoneCall](/tl/types#phonecall)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 
| `g_a` | `[]byte` | | 
| `key_fingerprint` | `int64` | | 
| `protocol` | `PhoneCallProtocol` | | 

## Example

```go
result, err := client.Raw(&tg.ConfirmCallRequest{
    peer: nil, // InputPhoneCall
    g_a: nil,
    key_fingerprint: 0,
    protocol: nil, // PhoneCallProtocol
})
if err != nil {
    panic(err)
}
print(result)
```
