---
title: UpdateStarRefProgram
description: TL method bots.updateStarRefProgram
---

# bots.updateStarRefProgram

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x778b5ab3`  
Returns: [StarRefProgram](/tl/types#starrefprogram)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `commission_permille` | `int32` | | 
| `duration_months` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateStarRefProgramRequest{
    bot: nil, // InputUser
    commission_permille: 0,
    duration_months: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
