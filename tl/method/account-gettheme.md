---
title: GetTheme
description: TL method account.getTheme
---

# account.getTheme

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3a5869ec`  
Returns: [Theme](/tl/types#theme)

## Parameters

| Name | Type | Description |
|---|---|---|
| `format` | `string` | | 
| `theme` | `InputTheme` | | 

## Example

```go
result, err := client.Raw(&tg.GetThemeRequest{
    format: "",
    theme: nil, // InputTheme
})
if err != nil {
    panic(err)
}
print(result)
```
