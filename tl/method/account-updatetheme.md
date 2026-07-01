---
title: UpdateTheme
description: TL method account.updateTheme
---

# account.updateTheme

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2bf40ccc`  
Returns: [Theme](/tl/types#theme)

## Parameters

| Name | Type | Description |
|---|---|---|
| `format` | `string` | | 
| `theme` | `InputTheme` | | 
| `slug` | `string` *(flags.0, optional)* | | 
| `title` | `string` *(flags.1, optional)* | | 
| `document` | `InputDocument` *(flags.2, optional)* | | 
| `settings` | `[]InputThemeSettings` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateThemeRequest{
    format: "",
    theme: nil, // InputTheme
    slug: "",
    title: "",
    document: nil, // InputDocument
    settings: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
