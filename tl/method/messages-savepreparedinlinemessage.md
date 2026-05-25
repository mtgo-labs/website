---
title: SavePreparedInlineMessage
description: TL method messages.savePreparedInlineMessage
---

# messages.savePreparedInlineMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf21f7f2f`  
Returns: [BotPreparedInlineMessage](/tl/types#botpreparedinlinemessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `result` | `InputBotInlineResult` | | 
| `user_id` | `InputUser` | | 
| `peer_types` | `[]InlineQueryPeerType` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SavePreparedInlineMessageRequest{
    result: nil, // InputBotInlineResult
    user_id: nil, // InputUser
    peer_types: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
