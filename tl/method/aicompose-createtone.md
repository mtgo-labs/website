---
title: CreateTone
description: TL method aicompose.createTone
---

# aicompose.createTone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4aa83913`  
Returns: [AiComposeTone](/tl/types#aicomposetone)

## Parameters

| Name | Type | Description |
|---|---|---|
| `display_author` | `bool` *(flags.0, optional)* | | 
| `emoji_id` | `int64` | | 
| `title` | `string` | | 
| `prompt` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CreateToneRequest{
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
