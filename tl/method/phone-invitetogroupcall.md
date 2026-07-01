---
title: InviteToGroupCall
description: TL method phone.inviteToGroupCall
---

# phone.inviteToGroupCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7b393160`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `users` | `[]InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.InviteToGroupCallRequest{
    call: nil, // InputGroupCall
    users: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
