---
title: GetBoostsStatus
description: TL method premium.getBoostsStatus
---

# premium.getBoostsStatus

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x042f1f61`  
Returns: [BoostsStatus](/tl/types#boostsstatus)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetBoostsStatusRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
