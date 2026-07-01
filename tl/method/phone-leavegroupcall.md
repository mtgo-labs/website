---
title: LeaveGroupCall
description: TL method phone.leaveGroupCall
---

# phone.leaveGroupCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x500377f9`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `source` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.LeaveGroupCallRequest{
    call: nil, // InputGroupCall
    source: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
