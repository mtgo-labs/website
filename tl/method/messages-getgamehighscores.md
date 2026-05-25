---
title: GetGameHighScores
description: TL method messages.getGameHighScores
---

# messages.getGameHighScores

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe822649d`  
Returns: [HighScores](/tl/types#highscores)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetGameHighScoresRequest{
    peer: nil, // InputPeer
    id: 0,
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
