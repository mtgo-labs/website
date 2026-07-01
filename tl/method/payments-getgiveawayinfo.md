---
title: GetGiveawayInfo
description: TL method payments.getGiveawayInfo
---

# payments.getGiveawayInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf4239425`  
Returns: [GiveawayInfo](/tl/types#giveawayinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetGiveawayInfoRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
