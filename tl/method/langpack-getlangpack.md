---
title: GetLangPack
description: TL method langpack.getLangPack
---

# langpack.getLangPack

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf2f2330a`  
Returns: [LangPackDifference](/tl/types#langpackdifference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_pack` | `string` | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetLangPackRequest{
    lang_pack: "",
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
