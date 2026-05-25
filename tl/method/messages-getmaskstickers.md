---
title: GetMaskStickers
description: TL method messages.getMaskStickers
---

# messages.getMaskStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x640f82b8`  
Returns: [AllStickers](/tl/types#allstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetMaskStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
