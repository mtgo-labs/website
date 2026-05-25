---
title: UploadWallPaper
description: TL method account.uploadWallPaper
---

# account.uploadWallPaper

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe39a8f03`  
Returns: [WallPaper](/tl/types#wallpaper)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_chat` | `bool` *(flags.0, optional)* | | 
| `file` | `InputFile` | | 
| `mime_type` | `string` | | 
| `settings` | `WallPaperSettings` | | 

## Example

```go
result, err := client.Raw(&tg.UploadWallPaperRequest{
    for_chat: false,
    file: nil, // InputFile
    mime_type: "",
    settings: nil, // WallPaperSettings
})
if err != nil {
    panic(err)
}
print(result)
```
