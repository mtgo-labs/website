---
title: SetBoostsToUnblockRestrictions
description: TL method channels.setBoostsToUnblockRestrictions
---

# channels.setBoostsToUnblockRestrictions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xad399cee`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `boosts` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetBoostsToUnblockRestrictionsRequest{
    channel: nil, // InputChannel
    boosts: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
