---
title: GetSavedMusicByID
description: TL method users.getSavedMusicByID
---

# users.getSavedMusicByID

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7573a4e9`  
Returns: [SavedMusic](/tl/types#savedmusic)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 
| `documents` | `[]InputDocument` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedMusicByIDRequest{
    id: nil, // InputUser
    documents: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
