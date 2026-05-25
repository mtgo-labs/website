---
title: EditChatPhoto
description: TL method messages.editChatPhoto
---

# messages.editChatPhoto

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x35ddd674`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 
| `photo` | `InputChatPhoto` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatPhotoRequest{
    chat_id: 0,
    photo: nil, // InputChatPhoto
})
if err != nil {
    panic(err)
}
print(result)
```
