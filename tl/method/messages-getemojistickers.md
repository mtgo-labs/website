---
title: GetEmojiStickers
description: TL method messages.getEmojiStickers
---

# messages.getEmojiStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfbfca18f`  
Returns: [AllStickers](/tl/types#allstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
