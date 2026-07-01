---
title: GetArchivedStickers
description: TL method messages.getArchivedStickers
---

# messages.getArchivedStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x57f17692`  
Returns: [ArchivedStickers](/tl/types#archivedstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `masks` | `bool` *(flags.0, optional)* | | 
| `emojis` | `bool` *(flags.1, optional)* | | 
| `offset_id` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetArchivedStickersRequest{
    masks: false,
    emojis: false,
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
