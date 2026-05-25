---
title: ApplyBoost
description: TL method premium.applyBoost
---

# premium.applyBoost

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6b7da746`  
Returns: [MyBoosts](/tl/types#myboosts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slots` | `[]int32` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ApplyBoostRequest{
    slots: nil,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
