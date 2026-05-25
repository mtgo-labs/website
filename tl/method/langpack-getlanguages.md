---
title: GetLanguages
description: TL method langpack.getLanguages
---

# langpack.getLanguages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x42c6978f`  
Returns: [LangPackLanguage](/tl/types#langpacklanguage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_pack` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetLanguagesRequest{
    lang_pack: "",
})
if err != nil {
    panic(err)
}
print(result)
```
