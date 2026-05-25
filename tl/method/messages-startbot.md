---
title: StartBot
description: TL method messages.startBot
---

# messages.startBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe6df7378`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `peer` | `InputPeer` | | 
| `random_id` | `int64` | | 
| `start_param` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.StartBotRequest{
    bot: nil, // InputUser
    peer: nil, // InputPeer
    random_id: 0,
    start_param: "",
})
if err != nil {
    panic(err)
}
print(result)
```
