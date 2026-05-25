---
title: UpdateNotifySettings
description: TL method account.updateNotifySettings
---

# account.updateNotifySettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x84be5b93`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputNotifyPeer` | | 
| `settings` | `InputPeerNotifySettings` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateNotifySettingsRequest{
    peer: nil, // InputNotifyPeer
    settings: nil, // InputPeerNotifySettings
})
if err != nil {
    panic(err)
}
print(result)
```
