---
title: UpdateColor
description: TL method channels.updateColor
---

# channels.updateColor

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd8aa3671`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_profile` | `bool` *(flags.1, optional)* | | 
| `channel` | `InputChannel` | | 
| `color` | `int32` *(flags.2, optional)* | | 
| `background_emoji_id` | `int64` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateColorRequest{
    for_profile: false,
    channel: nil, // InputChannel
    color: 0,
    background_emoji_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
