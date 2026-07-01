---
title: SetBotBroadcastDefaultAdminRights
description: TL method bots.setBotBroadcastDefaultAdminRights
---

# bots.setBotBroadcastDefaultAdminRights

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x788464e1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `admin_rights` | `ChatAdminRights` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotBroadcastDefaultAdminRightsRequest{
    admin_rights: nil, // ChatAdminRights
})
if err != nil {
    panic(err)
}
print(result)
```
