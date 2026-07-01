---
title: GetThemes
description: TL method account.getThemes
---

# account.getThemes

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7206e458`  
Returns: [Themes](/tl/types#themes)

## Parameters

| Name | Type | Description |
|---|---|---|
| `format` | `string` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetThemesRequest{
    format: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
