---
title: ToggleSuggestedPostApproval
description: TL method messages.toggleSuggestedPostApproval
---

# messages.toggleSuggestedPostApproval

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8107455c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `reject` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `schedule_date` | `int32` *(flags.0, optional)* | | 
| `reject_comment` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ToggleSuggestedPostApprovalRequest{
    reject: false,
    peer: nil, // InputPeer
    msg_id: 0,
    schedule_date: 0,
    reject_comment: "",
})
if err != nil {
    panic(err)
}
print(result)
```
