---
title: GetTopReactions
description: TL method messages.getTopReactions
---

# messages.getTopReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbb8125ba`  
Returns: [Reactions](/tl/types#reactions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetTopReactionsRequest{
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
