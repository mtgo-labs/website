---
title: SaveDraft
description: TL method messages.saveDraft
---

# messages.saveDraft

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x54ae308e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_webpage` | `bool` *(flags.1, optional)* | | 
| `invert_media` | `bool` *(flags.6, optional)* | | 
| `reply_to` | `InputReplyTo` *(flags.4, optional)* | | 
| `peer` | `InputPeer` | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.3, optional)* | | 
| `media` | `InputMedia` *(flags.5, optional)* | | 
| `effect` | `int64` *(flags.7, optional)* | | 
| `suggested_post` | `SuggestedPost` *(flags.8, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SaveDraftRequest{
    no_webpage: false,
    invert_media: false,
    reply_to: nil, // InputReplyTo
    peer: nil, // InputPeer
    message: "",
    entities: nil,
    media: nil, // InputMedia
    effect: 0,
    suggested_post: nil, // SuggestedPost
})
if err != nil {
    panic(err)
}
print(result)
```
