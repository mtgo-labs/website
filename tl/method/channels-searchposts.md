---
title: SearchPosts
description: TL method channels.searchPosts
---

# channels.searchPosts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf2c4f24d`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hashtag` | `string` *(flags.0, optional)* | | 
| `query` | `string` *(flags.1, optional)* | | 
| `offset_rate` | `int32` | | 
| `offset_peer` | `InputPeer` | | 
| `offset_id` | `int32` | | 
| `limit` | `int32` | | 
| `allow_paid_stars` | `int64` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SearchPostsRequest{
    hashtag: "",
    query: "",
    offset_rate: 0,
    offset_peer: nil, // InputPeer
    offset_id: 0,
    limit: 0,
    allow_paid_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
