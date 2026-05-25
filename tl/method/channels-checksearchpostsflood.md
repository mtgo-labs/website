---
title: CheckSearchPostsFlood
description: TL method channels.checkSearchPostsFlood
---

# channels.checkSearchPostsFlood

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x22567115`  
Returns: [SearchPostsFlood](/tl/types#searchpostsflood)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CheckSearchPostsFloodRequest{
    query: "",
})
if err != nil {
    panic(err)
}
print(result)
```
