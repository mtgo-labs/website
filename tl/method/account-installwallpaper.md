---
title: InstallWallPaper
description: TL method account.installWallPaper
---

# account.installWallPaper

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfeed5769`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `wallpaper` | `InputWallPaper` | | 
| `settings` | `WallPaperSettings` | | 

## Example

```go
result, err := client.Raw(&tg.InstallWallPaperRequest{
    wallpaper: nil, // InputWallPaper
    settings: nil, // WallPaperSettings
})
if err != nil {
    panic(err)
}
print(result)
```
