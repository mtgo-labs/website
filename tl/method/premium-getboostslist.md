---
title: GetBoostsList
description: TL method premium.getBoostsList
---

# premium.getBoostsList

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x60f67660`  
Returns: [BoostsList](/tl/types#boostslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gifts` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetBoostsListRequest{
    gifts: false,
    peer: nil, // InputPeer
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
