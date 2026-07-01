---
title: GetGroupCallStreamRtmpURL
description: TL method phone.getGroupCallStreamRtmpUrl
---

# phone.getGroupCallStreamRtmpUrl

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5af4c73a`  
Returns: [GroupCallStreamRtmpURL](/tl/types#groupcallstreamrtmpurl)

## Parameters

| Name | Type | Description |
|---|---|---|
| `live_story` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `revoke` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallStreamRtmpURLRequest{
    live_story: false,
    peer: nil, // InputPeer
    revoke: false,
})
if err != nil {
    panic(err)
}
print(result)
```
