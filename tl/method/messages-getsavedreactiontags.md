---
title: GetSavedReactionTags
description: TL method messages.getSavedReactionTags
---

# messages.getSavedReactionTags

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3637e05b`  
Returns: [SavedReactionTags](/tl/types#savedreactiontags)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` *(flags.0, optional)* | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedReactionTagsRequest{
    peer: nil, // InputPeer
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
