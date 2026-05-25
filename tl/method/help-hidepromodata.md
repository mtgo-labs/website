---
title: HidePromoData
description: TL method help.hidePromoData
---

# help.hidePromoData

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1e251c95`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.HidePromoDataRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
