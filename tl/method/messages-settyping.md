---
title: SetTyping
description: TL method messages.setTyping
---

# messages.setTyping

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x58943ee2`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `action` | `SendMessageAction` | | 

## Example

```go
result, err := client.Raw(&tg.SetTypingRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
    action: nil, // SendMessageAction
})
if err != nil {
    panic(err)
}
print(result)
```
