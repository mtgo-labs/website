---
title: UpdateEmojiStatus
description: TL method account.updateEmojiStatus
---

# account.updateEmojiStatus

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfbd3de6b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `emoji_status` | `EmojiStatus` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateEmojiStatusRequest{
    emoji_status: nil, // EmojiStatus
})
if err != nil {
    panic(err)
}
print(result)
```
