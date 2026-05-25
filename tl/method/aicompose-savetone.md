---
title: SaveTone
description: TL method aicompose.saveTone
---

# aicompose.saveTone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1782cbb1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tone` | `InputAiComposeTone` | | 
| `unsave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SaveToneRequest{
    tone: nil, // InputAiComposeTone
    unsave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
