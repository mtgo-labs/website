---
title: GetSendAs
description: TL method channels.getSendAs
---

# channels.getSendAs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe785a43f`  
Returns: [SendAsPeers](/tl/types#sendaspeers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_paid_reactions` | `bool` *(flags.0, optional)* | | 
| `for_live_stories` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetSendAsRequest{
    for_paid_reactions: false,
    for_live_stories: false,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
