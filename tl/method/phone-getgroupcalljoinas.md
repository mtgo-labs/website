---
title: GetGroupCallJoinAs
description: TL method phone.getGroupCallJoinAs
---

# phone.getGroupCallJoinAs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xef7c213a`  
Returns: [JoinAsPeers](/tl/types#joinaspeers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallJoinAsRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
