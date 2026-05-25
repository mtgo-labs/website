---
title: SuggestShortName
description: TL method stickers.suggestShortName
---

# stickers.suggestShortName

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4dafc503`  
Returns: [SuggestedShortName](/tl/types#suggestedshortname)

## Parameters

| Name | Type | Description |
|---|---|---|
| `title` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SuggestShortNameRequest{
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
