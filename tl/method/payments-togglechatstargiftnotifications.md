---
title: ToggleChatStarGiftNotifications
description: TL method payments.toggleChatStarGiftNotifications
---

# payments.toggleChatStarGiftNotifications

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x60eaefa1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `enabled` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleChatStarGiftNotificationsRequest{
    enabled: false,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
