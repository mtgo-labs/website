---
title: GetTone
description: TL method aicompose.getTone
---

# aicompose.getTone

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb2e8ba03`  
Returns: [Tones](/tl/types#tones)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tone` | `InputAiComposeTone` | | 

## Example

```go
result, err := client.Raw(&tg.GetToneRequest{
    tone: nil, // InputAiComposeTone
})
if err != nil {
    panic(err)
}
print(result)
```
