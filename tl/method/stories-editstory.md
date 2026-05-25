---
title: EditStory
description: TL method stories.editStory
---

# stories.editStory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2c63a72b`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `media` | `InputMedia` *(flags.0, optional)* | | 
| `media_areas` | `[]MediaArea` *(flags.3, optional)* | | 
| `caption` | `string` *(flags.1, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.1, optional)* | | 
| `privacy_rules` | `[]InputPrivacyRule` *(flags.2, optional)* | | 
| `music` | `InputDocument` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditStoryRequest{
    peer: nil, // InputPeer
    id: 0,
    media: nil, // InputMedia
    media_areas: nil,
    caption: "",
    entities: nil,
    privacy_rules: nil,
    music: nil, // InputDocument
})
if err != nil {
    panic(err)
}
print(result)
```
