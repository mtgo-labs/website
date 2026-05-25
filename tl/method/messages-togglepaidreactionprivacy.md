---
title: TogglePaidReactionPrivacy
description: TL method messages.togglePaidReactionPrivacy
---

# messages.togglePaidReactionPrivacy

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x435885b5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `private` | `PaidReactionPrivacy` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePaidReactionPrivacyRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    private: nil, // PaidReactionPrivacy
})
if err != nil {
    panic(err)
}
print(result)
```
