---
title: DeleteTone
description: TL method aicompose.deleteTone
---

# aicompose.deleteTone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdd39316a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tone` | `InputAiComposeTone` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteToneRequest{
    tone: nil, // InputAiComposeTone
})
if err != nil {
    panic(err)
}
print(result)
```
