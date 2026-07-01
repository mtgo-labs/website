---
title: SummarizeText
description: TL method messages.summarizeText
---

# messages.summarizeText

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xabbbd346`  
Returns: [TextWithEntities](/tl/types#textwithentities)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `to_lang` | `string` *(flags.0, optional)* | | 
| `tone` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SummarizeTextRequest{
    peer: nil, // InputPeer
    id: 0,
    to_lang: "",
    tone: "",
})
if err != nil {
    panic(err)
}
print(result)
```
