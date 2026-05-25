---
title: GetAllStories
description: TL method stories.getAllStories
---

# stories.getAllStories

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xeeb0d625`  
Returns: [AllStories](/tl/types#allstories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `next` | `bool` *(flags.1, optional)* | | 
| `hidden` | `bool` *(flags.2, optional)* | | 
| `state` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetAllStoriesRequest{
    next: false,
    hidden: false,
    state: "",
})
if err != nil {
    panic(err)
}
print(result)
```
