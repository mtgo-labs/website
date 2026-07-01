---
title: GetStoryReactionsList
description: TL method stories.getStoryReactionsList
---

# stories.getStoryReactionsList

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb9b2881f`  
Returns: [StoryReactionsList](/tl/types#storyreactionslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `forwards_first` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `reaction` | `Reaction` *(flags.0, optional)* | | 
| `offset` | `string` *(flags.1, optional)* | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoryReactionsListRequest{
    forwards_first: false,
    peer: nil, // InputPeer
    id: 0,
    reaction: nil, // Reaction
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
