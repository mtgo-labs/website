---
title: SetGameScore
description: TL method messages.setGameScore
---

# messages.setGameScore

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8ef8ecc0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `edit_message` | `bool` *(flags.0, optional)* | | 
| `force` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `user_id` | `InputUser` | | 
| `score` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetGameScoreRequest{
    edit_message: false,
    force: false,
    peer: nil, // InputPeer
    id: 0,
    user_id: nil, // InputUser
    score: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
