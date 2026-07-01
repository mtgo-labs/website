---
title: SaveDefaultGroupCallJoinAs
description: TL method phone.saveDefaultGroupCallJoinAs
---

# phone.saveDefaultGroupCallJoinAs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x575e1f8c`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `join_as` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.SaveDefaultGroupCallJoinAsRequest{
    peer: nil, // InputPeer
    join_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
