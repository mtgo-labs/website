---
title: EditPhoto
description: TL method channels.editPhoto
---

# channels.editPhoto

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf12e57c9`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `photo` | `InputChatPhoto` | | 

## Example

```go
result, err := client.Raw(&tg.EditPhotoRequest{
    channel: nil, // InputChannel
    photo: nil, // InputChatPhoto
})
if err != nil {
    panic(err)
}
print(result)
```
