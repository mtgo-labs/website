---
title: EditChatCreator
description: TL method messages.editChatCreator
---

# messages.editChatCreator

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf743b857`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `user_id` | `InputUser` | | 
| `password` | `InputCheckPasswordSRP` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatCreatorRequest{
    peer: nil, // InputPeer
    user_id: nil, // InputUser
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
