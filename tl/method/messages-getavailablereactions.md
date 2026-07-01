---
title: GetAvailableReactions
description: TL method messages.getAvailableReactions
---

# messages.getAvailableReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x18dea0ac`  
Returns: [AvailableReactions](/tl/types#availablereactions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetAvailableReactionsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
