---
title: ToggleNoPaidMessagesException
description: TL method account.toggleNoPaidMessagesException
---

# account.toggleNoPaidMessagesException

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfe2eda76`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `refund_charged` | `bool` *(flags.0, optional)* | | 
| `require_payment` | `bool` *(flags.2, optional)* | | 
| `parent_peer` | `InputPeer` *(flags.1, optional)* | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleNoPaidMessagesExceptionRequest{
    refund_charged: false,
    require_payment: false,
    parent_peer: nil, // InputPeer
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
