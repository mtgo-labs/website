---
title: GetSavedGifs
description: TL method messages.getSavedGifs
---

# messages.getSavedGifs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5cf09635`  
Returns: [SavedGifs](/tl/types#savedgifs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedGifsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
