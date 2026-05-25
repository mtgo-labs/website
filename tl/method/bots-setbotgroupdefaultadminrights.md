---
title: SetBotGroupDefaultAdminRights
description: TL method bots.setBotGroupDefaultAdminRights
---

# bots.setBotGroupDefaultAdminRights

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x925ec9ea`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `admin_rights` | `ChatAdminRights` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotGroupDefaultAdminRightsRequest{
    admin_rights: nil, // ChatAdminRights
})
if err != nil {
    panic(err)
}
print(result)
```
