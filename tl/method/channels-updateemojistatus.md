---
title: UpdateEmojiStatus
description: TL method channels.updateEmojiStatus
---

# channels.updateEmojiStatus

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf0d3e6a8`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `emoji_status` | `EmojiStatus` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateEmojiStatusRequest{
    channel: nil, // InputChannel
    emoji_status: nil, // EmojiStatus
})
if err != nil {
    panic(err)
}
print(result)
```
