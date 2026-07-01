---
title: UninstallStickerSet
description: TL method messages.uninstallStickerSet
---

# messages.uninstallStickerSet

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf96e55de`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 

## Example

```go
result, err := client.Raw(&tg.UninstallStickerSetRequest{
    stickerset: nil, // InputStickerSet
})
if err != nil {
    panic(err)
}
print(result)
```
