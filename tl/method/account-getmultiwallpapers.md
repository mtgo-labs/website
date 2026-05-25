---
title: GetMultiWallPapers
description: TL method account.getMultiWallPapers
---

# account.getMultiWallPapers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x65ad71dc`  
Returns: [WallPaper](/tl/types#wallpaper)

## Parameters

| Name | Type | Description |
|---|---|---|
| `wallpapers` | `[]InputWallPaper` | | 

## Example

```go
result, err := client.Raw(&tg.GetMultiWallPapersRequest{
    wallpapers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
