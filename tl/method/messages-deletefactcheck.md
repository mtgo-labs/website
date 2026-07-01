---
title: DeleteFactCheck
description: TL method messages.deleteFactCheck
---

# messages.deleteFactCheck

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd1da940c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteFactCheckRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
