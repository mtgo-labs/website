---
title: GetAdminsWithInvites
description: TL method messages.getAdminsWithInvites
---

# messages.getAdminsWithInvites

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3920e6ef`  
Returns: [ChatAdminsWithInvites](/tl/types#chatadminswithinvites)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetAdminsWithInvitesRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
