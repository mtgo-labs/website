---
title: GetAllStickers
description: TL method messages.getAllStickers
---

# messages.getAllStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb8a0a1a8`  
Returns: [AllStickers](/tl/types#allstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetAllStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
