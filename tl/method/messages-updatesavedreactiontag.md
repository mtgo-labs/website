---
title: UpdateSavedReactionTag
description: TL method messages.updateSavedReactionTag
---

# messages.updateSavedReactionTag

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x60297dec`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `reaction` | `Reaction` | | 
| `title` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateSavedReactionTagRequest{
    reaction: nil, // Reaction
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
