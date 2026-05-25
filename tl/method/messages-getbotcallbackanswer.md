---
title: GetBotCallbackAnswer
description: TL method messages.getBotCallbackAnswer
---

# messages.getBotCallbackAnswer

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9342ca07`  
Returns: [BotCallbackAnswer](/tl/types#botcallbackanswer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `game` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `data` | `[]byte` *(flags.0, optional)* | | 
| `password` | `InputCheckPasswordSRP` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetBotCallbackAnswerRequest{
    game: false,
    peer: nil, // InputPeer
    msg_id: 0,
    data: nil,
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
