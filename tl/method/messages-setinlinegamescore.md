---
title: SetInlineGameScore
description: TL method messages.setInlineGameScore
---

# messages.setInlineGameScore

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x15ad9f64`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `edit_message` | `bool` *(flags.0, optional)* | | 
| `force` | `bool` *(flags.1, optional)* | | 
| `id` | `InputBotInlineMessageID` | | 
| `user_id` | `InputUser` | | 
| `score` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetInlineGameScoreRequest{
    edit_message: false,
    force: false,
    id: nil, // InputBotInlineMessageID
    user_id: nil, // InputUser
    score: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
