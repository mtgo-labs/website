---
title: SearchStickers
description: TL method messages.searchStickers
---

# messages.searchStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x29b1c66a`  
Returns: [FoundStickers](/tl/types#foundstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `emojis` | `bool` *(flags.0, optional)* | | 
| `q` | `string` | | 
| `emoticon` | `string` | | 
| `lang_code` | `[]string` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SearchStickersRequest{
    emojis: false,
    q: "",
    emoticon: "",
    lang_code: nil,
    offset: 0,
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
