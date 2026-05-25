---
title: ExportChatInvite
description: TL method messages.exportChatInvite
---

# messages.exportChatInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa455de90`  
Returns: [ExportedChatInvite](/tl/types#exportedchatinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `legacy_revoke_permanent` | `bool` *(flags.2, optional)* | | 
| `request_needed` | `bool` *(flags.3, optional)* | | 
| `peer` | `InputPeer` | | 
| `expire_date` | `int32` *(flags.0, optional)* | | 
| `usage_limit` | `int32` *(flags.1, optional)* | | 
| `title` | `string` *(flags.4, optional)* | | 
| `subscription_pricing` | `StarsSubscriptionPricing` *(flags.5, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ExportChatInviteRequest{
    legacy_revoke_permanent: false,
    request_needed: false,
    peer: nil, // InputPeer
    expire_date: 0,
    usage_limit: 0,
    title: "",
    subscription_pricing: nil, // StarsSubscriptionPricing
})
if err != nil {
    panic(err)
}
print(result)
```
