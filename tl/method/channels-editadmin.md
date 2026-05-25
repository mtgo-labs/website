---
title: EditAdmin
description: TL method channels.editAdmin
---

# channels.editAdmin

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9a98ad68`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `user_id` | `InputUser` | | 
| `admin_rights` | `ChatAdminRights` | | 
| `rank` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditAdminRequest{
    channel: nil, // InputChannel
    user_id: nil, // InputUser
    admin_rights: nil, // ChatAdminRights
    rank: "",
})
if err != nil {
    panic(err)
}
print(result)
```
