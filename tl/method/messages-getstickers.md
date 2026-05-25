---
title: GetStickers
description: TL method messages.getStickers
---

# messages.getStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd5a5d3a1`  
Returns: [Stickers](/tl/types#stickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `emoticon` | `string` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStickersRequest{
    emoticon: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
