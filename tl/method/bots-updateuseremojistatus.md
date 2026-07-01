---
title: UpdateUserEmojiStatus
description: TL method bots.updateUserEmojiStatus
---

# bots.updateUserEmojiStatus

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xed9f30c5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `emoji_status` | `EmojiStatus` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateUserEmojiStatusRequest{
    user_id: nil, // InputUser
    emoji_status: nil, // EmojiStatus
})
if err != nil {
    panic(err)
}
print(result)
```
