---
title: LoadAsyncGraph
description: TL method stats.loadAsyncGraph
---

# stats.loadAsyncGraph

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x621d5fa0`  
Returns: [StatsGraph](/tl/types#statsgraph)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token` | `string` | | 
| `x` | `int64` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.LoadAsyncGraphRequest{
    token: "",
    x: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
