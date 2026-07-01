---
title: GetCountriesList
description: TL method help.getCountriesList
---

# help.getCountriesList

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x735787a8`  
Returns: [CountriesList](/tl/types#countrieslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_code` | `string` | | 
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetCountriesListRequest{
    lang_code: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
