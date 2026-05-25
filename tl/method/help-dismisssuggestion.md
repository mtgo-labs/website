---
title: DismissSuggestion
description: TL method help.dismissSuggestion
---

# help.dismissSuggestion

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf50dbaa1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `suggestion` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DismissSuggestionRequest{
    peer: nil, // InputPeer
    suggestion: "",
})
if err != nil {
    panic(err)
}
print(result)
```
