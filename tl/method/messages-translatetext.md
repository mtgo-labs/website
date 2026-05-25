---
title: TranslateText
description: TL method messages.translateText
---

# messages.translateText

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa5eec345`  
Returns: [TranslatedText](/tl/types#translatedtext)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` *(flags.0, optional)* | | 
| `id` | `[]int32` *(flags.0, optional)* | | 
| `text` | `[]TextWithEntities` *(flags.1, optional)* | | 
| `to_lang` | `string` | | 
| `tone` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.TranslateTextRequest{
    peer: nil, // InputPeer
    id: nil,
    text: nil,
    to_lang: "",
    tone: "",
})
if err != nil {
    panic(err)
}
print(result)
```
