---
title: UpdateTone
description: TL method aicompose.updateTone
---

# aicompose.updateTone

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x903bcf59`  
Returns: [AiComposeTone](/tl/types#aicomposetone)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tone` | `InputAiComposeTone` | | 
| `display_author` | `bool` *(flags.0, optional)* | | 
| `emoji_id` | `int64` *(flags.1, optional)* | | 
| `title` | `string` *(flags.2, optional)* | | 
| `prompt` | `string` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateToneRequest{
    tone: nil, // InputAiComposeTone
    display_author: false,
    emoji_id: 0,
    title: "",
    prompt: "",
})
if err != nil {
    panic(err)
}
print(result)
```
