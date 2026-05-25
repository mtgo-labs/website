---
title: ToggleAllStoriesHidden
description: TL method stories.toggleAllStoriesHidden
---

# stories.toggleAllStoriesHidden

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7c2557c4`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hidden` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleAllStoriesHiddenRequest{
    hidden: false,
})
if err != nil {
    panic(err)
}
print(result)
```
