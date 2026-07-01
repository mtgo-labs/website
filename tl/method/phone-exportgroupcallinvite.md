---
title: ExportGroupCallInvite
description: TL method phone.exportGroupCallInvite
---

# phone.exportGroupCallInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe6aa647f`  
Returns: [ExportedGroupCallInvite](/tl/types#exportedgroupcallinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `can_self_unmute` | `bool` *(flags.0, optional)* | | 
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.ExportGroupCallInviteRequest{
    can_self_unmute: false,
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
