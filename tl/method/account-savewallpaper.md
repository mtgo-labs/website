---
title: SaveWallPaper
description: TL method account.saveWallPaper
---

# account.saveWallPaper

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6c5a5b37`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `wallpaper` | `InputWallPaper` | | 
| `unsave` | `bool` | | 
| `settings` | `WallPaperSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SaveWallPaperRequest{
    wallpaper: nil, // InputWallPaper
    unsave: false,
    settings: nil, // WallPaperSettings
})
if err != nil {
    panic(err)
}
print(result)
```
