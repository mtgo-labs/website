---
title: SetDefaultReaction
description: TL method messages.setDefaultReaction
---

# messages.setDefaultReaction

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4f47a016`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `reaction` | `Reaction` | | 

## Example

```go
result, err := client.Raw(&tg.SetDefaultReactionRequest{
    reaction: nil, // Reaction
})
if err != nil {
    panic(err)
}
print(result)
```
