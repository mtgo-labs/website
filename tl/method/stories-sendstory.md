---
title: SendStory
description: TL method stories.sendStory
---

# stories.sendStory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8f9e6898`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pinned` | `bool` *(flags.2, optional)* | | 
| `noforwards` | `bool` *(flags.4, optional)* | | 
| `fwd_modified` | `bool` *(flags.7, optional)* | | 
| `peer` | `InputPeer` | | 
| `media` | `InputMedia` | | 
| `media_areas` | `[]MediaArea` *(flags.5, optional)* | | 
| `caption` | `string` *(flags.0, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.1, optional)* | | 
| `privacy_rules` | `[]InputPrivacyRule` | | 
| `random_id` | `int64` | | 
| `period` | `int32` *(flags.3, optional)* | | 
| `fwd_from_id` | `InputPeer` *(flags.6, optional)* | | 
| `fwd_from_story` | `int32` *(flags.6, optional)* | | 
| `albums` | `[]int32` *(flags.8, optional)* | | 
| `music` | `InputDocument` *(flags.9, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendStoryRequest{
    pinned: false,
    noforwards: false,
    fwd_modified: false,
    peer: nil, // InputPeer
    media: nil, // InputMedia
    media_areas: nil,
    caption: "",
    entities: nil,
    privacy_rules: nil,
    random_id: 0,
    period: 0,
    fwd_from_id: nil, // InputPeer
    fwd_from_story: 0,
    albums: nil,
    music: nil, // InputDocument
})
if err != nil {
    panic(err)
}
print(result)
```
