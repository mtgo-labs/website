---
title: DiscardCall
description: TL method phone.discardCall
---

# phone.discardCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb2cbc1c0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `video` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPhoneCall` | | 
| `duration` | `int32` | | 
| `reason` | `PhoneCallDiscardReason` | | 
| `connection_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.DiscardCallRequest{
    video: false,
    peer: nil, // InputPhoneCall
    duration: 0,
    reason: nil, // PhoneCallDiscardReason
    connection_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
