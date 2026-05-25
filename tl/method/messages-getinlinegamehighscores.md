---
title: GetInlineGameHighScores
description: TL method messages.getInlineGameHighScores
---

# messages.getInlineGameHighScores

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0f635e1b`  
Returns: [HighScores](/tl/types#highscores)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputBotInlineMessageID` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetInlineGameHighScoresRequest{
    id: nil, // InputBotInlineMessageID
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
