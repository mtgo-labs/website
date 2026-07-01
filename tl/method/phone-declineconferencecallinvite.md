---
title: DeclineConferenceCallInvite
description: TL method phone.declineConferenceCallInvite
---

# phone.declineConferenceCallInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3c479971`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeclineConferenceCallInviteRequest{
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
