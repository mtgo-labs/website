---
title: SaveTheme
description: TL method account.saveTheme
---

# account.saveTheme

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf257106c`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `theme` | `InputTheme` | | 
| `unsave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SaveThemeRequest{
    theme: nil, // InputTheme
    unsave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
