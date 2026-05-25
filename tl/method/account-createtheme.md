---
title: CreateTheme
description: TL method account.createTheme
---

# account.createTheme

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x652e4400`  
Returns: [Theme](/tl/types#theme)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 
| `title` | `string` | | 
| `document` | `InputDocument` *(flags.2, optional)* | | 
| `settings` | `[]InputThemeSettings` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateThemeRequest{
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
