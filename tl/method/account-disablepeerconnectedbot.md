---
title: DisablePeerConnectedBot
description: TL method account.disablePeerConnectedBot
---

# account.disablePeerConnectedBot

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5e437ed9`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.DisablePeerConnectedBotRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
