---
title: SaveDefaultSendAs
description: TL method messages.saveDefaultSendAs
---

# messages.saveDefaultSendAs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xccfddf96`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `send_as` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.SaveDefaultSendAsRequest{
    peer: nil, // InputPeer
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
