---
title: GetEmojiGameInfo
description: TL method messages.getEmojiGameInfo
---

# messages.getEmojiGameInfo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfb7e8ca7`  
Returns: [EmojiGameInfo](/tl/types#emojigameinfo)

## Example

```go
result, err := client.Raw(&tg.GetEmojiGameInfoRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
