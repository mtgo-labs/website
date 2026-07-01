---
title: SendSignalingData
description: TL method phone.sendSignalingData
---

# phone.sendSignalingData

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xff7a9383`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 
| `data` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendSignalingDataRequest{
    peer: nil, // InputPhoneCall
    data: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
