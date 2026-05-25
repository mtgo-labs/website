---
title: GetRecentReactions
description: TL method messages.getRecentReactions
---

# messages.getRecentReactions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x39461db2`  
Returns: [Reactions](/tl/types#reactions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetRecentReactionsRequest{
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
