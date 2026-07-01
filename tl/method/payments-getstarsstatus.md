---
title: GetStarsStatus
description: TL method payments.getStarsStatus
---

# payments.getStarsStatus

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4ea9b3bf`  
Returns: [StarsStatus](/tl/types#starsstatus)

## Parameters

| Name | Type | Description |
|---|---|---|
| `ton` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsStatusRequest{
    ton: false,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
