---
title: GetUserBoosts
description: TL method premium.getUserBoosts
---

# premium.getUserBoosts

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x39854d1f`  
Returns: [BoostsList](/tl/types#boostslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetUserBoostsRequest{
    peer: nil, // InputPeer
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
