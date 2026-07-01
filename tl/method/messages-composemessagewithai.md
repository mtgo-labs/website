---
title: ComposeMessageWithAi
description: TL method messages.composeMessageWithAI
---

# messages.composeMessageWithAI

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdaecc589`  
Returns: [ComposedMessageWithAi](/tl/types#composedmessagewithai)

## Parameters

| Name | Type | Description |
|---|---|---|
| `proofread` | `bool` *(flags.0, optional)* | | 
| `emojify` | `bool` *(flags.3, optional)* | | 
| `text` | `TextWithEntities` | | 
| `translate_to_lang` | `string` *(flags.1, optional)* | | 
| `tone` | `InputAiComposeTone` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ComposeMessageWithAiRequest{
    proofread: false,
    emojify: false,
    text: nil, // TextWithEntities
    translate_to_lang: "",
    tone: nil, // InputAiComposeTone
})
if err != nil {
    panic(err)
}
print(result)
```
