---
title: GetPaidMessagesRevenue
description: TL method account.getPaidMessagesRevenue
---

# account.getPaidMessagesRevenue

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x19ba4a67`  
Returns: [PaidMessagesRevenue](/tl/types#paidmessagesrevenue)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` *(flags.0, optional)* | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetPaidMessagesRevenueRequest{
    parent_peer: nil, // InputPeer
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
