---
title: GetStrings
description: TL method langpack.getStrings
---

# langpack.getStrings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xefea3803`  
Returns: [LangPackString](/tl/types#langpackstring)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_pack` | `string` | | 
| `lang_code` | `string` | | 
| `keys` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.GetStringsRequest{
    lang_pack: "",
    lang_code: "",
    keys: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
