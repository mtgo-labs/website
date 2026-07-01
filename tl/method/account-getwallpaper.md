---
title: GetWallPaper
description: TL method account.getWallPaper
---

# account.getWallPaper

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfc8ddbea`  
Returns: [WallPaper](/tl/types#wallpaper)

## Parameters

| Name | Type | Description |
|---|---|---|
| `wallpaper` | `InputWallPaper` | | 

## Example

```go
result, err := client.Raw(&tg.GetWallPaperRequest{
    wallpaper: nil, // InputWallPaper
})
if err != nil {
    panic(err)
}
print(result)
```
