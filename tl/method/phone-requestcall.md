---
title: RequestCall
description: TL method phone.requestCall
---

# phone.requestCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x42ff96ed`  
Returns: [PhoneCall](/tl/types#phonecall)

## Parameters

| Name | Type | Description |
|---|---|---|
| `video` | `bool` *(flags.0, optional)* | | 
| `user_id` | `InputUser` | | 
| `random_id` | `int32` | | 
| `g_a_hash` | `[]byte` | | 
| `protocol` | `PhoneCallProtocol` | | 

## Example

```go
result, err := client.Raw(&tg.RequestCallRequest{
    video: false,
    user_id: nil, // InputUser
    random_id: 0,
    g_a_hash: nil,
    protocol: nil, // PhoneCallProtocol
})
if err != nil {
    panic(err)
}
print(result)
```
