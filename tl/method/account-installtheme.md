---
title: InstallTheme
description: TL method account.installTheme
---

# account.installTheme

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc727bb3b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `theme` | `InputTheme` *(flags.1, optional)* | | 
| `format` | `string` *(flags.2, optional)* | | 
| `base_theme` | `BaseTheme` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.InstallThemeRequest{
    dark: false,
    theme: nil, // InputTheme
    format: "",
    base_theme: nil, // BaseTheme
})
if err != nil {
    panic(err)
}
print(result)
```
