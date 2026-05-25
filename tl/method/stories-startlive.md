---
title: StartLive
description: TL method stories.startLive
---

# stories.startLive

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd069ccde`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pinned` | `bool` *(flags.2, optional)* | | 
| `noforwards` | `bool` *(flags.4, optional)* | | 
| `rtmp_stream` | `bool` *(flags.5, optional)* | | 
| `peer` | `InputPeer` | | 
| `caption` | `string` *(flags.0, optional)* | | 
| `entities` | `[]MessageEntity` *(flags.1, optional)* | | 
| `privacy_rules` | `[]InputPrivacyRule` | | 
| `random_id` | `int64` | | 
| `messages_enabled` | `bool` *(flags.6, optional)* | | 
| `send_paid_messages_stars` | `int64` *(flags.7, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.StartLiveRequest{
    pinned: false,
    noforwards: false,
    rtmp_stream: false,
    peer: nil, // InputPeer
    caption: "",
    entities: nil,
    privacy_rules: nil,
    random_id: 0,
    messages_enabled: false,
    send_paid_messages_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
