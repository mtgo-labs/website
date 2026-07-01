---
title: GetFavedStickers
description: TL method messages.getFavedStickers
---

# messages.getFavedStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x04f1aaa9`  
Returns: [FavedStickers](/tl/types#favedstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetFavedStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
