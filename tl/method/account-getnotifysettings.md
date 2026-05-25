---
title: GetNotifySettings
description: TL method account.getNotifySettings
---

# account.getNotifySettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x12b3ad31`  
Returns: [PeerNotifySettings](/tl/types#peernotifysettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputNotifyPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetNotifySettingsRequest{
    peer: nil, // InputNotifyPeer
})
if err != nil {
    panic(err)
}
print(result)
```
