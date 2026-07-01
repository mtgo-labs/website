---
title: GetFactCheck
description: TL method messages.getFactCheck
---

# messages.getFactCheck

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb9cdc5ee`  
Returns: [FactCheck](/tl/types#factcheck)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetFactCheckRequest{
    peer: nil, // InputPeer
    msg_id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
