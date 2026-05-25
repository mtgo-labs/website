---
title: GetSavedMusic
description: TL method users.getSavedMusic
---

# users.getSavedMusic

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x788d7fe3`  
Returns: [SavedMusic](/tl/types#savedmusic)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedMusicRequest{
    id: nil, // InputUser
    offset: 0,
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
