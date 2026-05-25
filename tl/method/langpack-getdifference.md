---
title: GetDifference
description: TL method langpack.getDifference
---

# langpack.getDifference

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcd984aa5`  
Returns: [LangPackDifference](/tl/types#langpackdifference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_pack` | `string` | | 
| `lang_code` | `string` | | 
| `from_version` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetDifferenceRequest{
    lang_pack: "",
    lang_code: "",
    from_version: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
