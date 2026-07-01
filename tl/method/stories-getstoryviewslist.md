---
title: GetStoryViewsList
description: TL method stories.getStoryViewsList
---

# stories.getStoryViewsList

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7ed23c57`  
Returns: [StoryViewsList](/tl/types#storyviewslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `just_contacts` | `bool` *(flags.0, optional)* | | 
| `reactions_first` | `bool` *(flags.2, optional)* | | 
| `forwards_first` | `bool` *(flags.3, optional)* | | 
| `peer` | `InputPeer` | | 
| `q` | `string` *(flags.1, optional)* | | 
| `id` | `int32` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoryViewsListRequest{
    just_contacts: false,
    reactions_first: false,
    forwards_first: false,
    peer: nil, // InputPeer
    q: "",
    id: 0,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
