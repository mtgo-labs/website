---
title: GetToneExample
description: TL method aicompose.getToneExample
---

# aicompose.getToneExample

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd1b4ab14`  
Returns: [AiComposeToneExample](/tl/types#aicomposetoneexample)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tone` | `InputAiComposeTone` | | 
| `num` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetToneExampleRequest{
    tone: nil, // InputAiComposeTone
    num: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
