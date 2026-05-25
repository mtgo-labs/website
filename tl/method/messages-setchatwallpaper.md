---
title: SetChatWallPaper
description: TL method messages.setChatWallPaper
---

# messages.setChatWallPaper

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8ffacae1`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_both` | `bool` *(flags.3, optional)* | | 
| `revert` | `bool` *(flags.4, optional)* | | 
| `peer` | `InputPeer` | | 
| `wallpaper` | `InputWallPaper` *(flags.0, optional)* | | 
| `settings` | `WallPaperSettings` *(flags.2, optional)* | | 
| `id` | `int32` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetChatWallPaperRequest{
    for_both: false,
    revert: false,
    peer: nil, // InputPeer
    wallpaper: nil, // InputWallPaper
    settings: nil, // WallPaperSettings
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
