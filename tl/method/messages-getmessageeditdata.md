---
title: GetMessageEditData
description: TL method messages.getMessageEditData
---

# messages.getMessageEditData

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfda68d36`  
Returns: [MessageEditData](/tl/types#messageeditdata)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessageEditDataRequest{
    peer: nil, // InputPeer
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
