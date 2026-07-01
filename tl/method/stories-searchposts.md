---
title: SearchPosts
description: TL method stories.searchPosts
---

# stories.searchPosts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd1810907`  
Returns: [FoundStories](/tl/types#foundstories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hashtag` | `string` *(flags.0, optional)* | | 
| `area` | `MediaArea` *(flags.1, optional)* | | 
| `peer` | `InputPeer` *(flags.2, optional)* | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SearchPostsRequest{
    hashtag: "",
    area: nil, // MediaArea
    peer: nil, // InputPeer
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
