---
title: SaveMusic
description: TL method account.saveMusic
---

# account.saveMusic

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb26732a9`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `unsave` | `bool` *(flags.0, optional)* | | 
| `id` | `InputDocument` | | 
| `after_id` | `InputDocument` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SaveMusicRequest{
    unsave: false,
    id: nil, // InputDocument
    after_id: nil, // InputDocument
})
if err != nil {
    panic(err)
}
print(result)
```
