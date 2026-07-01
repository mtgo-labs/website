---
title: GetDefaultTagReactions
description: TL method messages.getDefaultTagReactions
---

# messages.getDefaultTagReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbdf93428`  
Returns: [Reactions](/tl/types#reactions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDefaultTagReactionsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
