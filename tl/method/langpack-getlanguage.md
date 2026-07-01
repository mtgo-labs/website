---
title: GetLanguage
description: TL method langpack.getLanguage
---

# langpack.getLanguage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6a596502`  
Returns: [LangPackLanguage](/tl/types#langpacklanguage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_pack` | `string` | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetLanguageRequest{
    lang_pack: "",
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
