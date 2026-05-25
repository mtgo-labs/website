---
title: GetGroupCall
description: TL method phone.getGroupCall
---

# phone.getGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x041845db`  
Returns: [GroupCall](/tl/types#groupcall)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallRequest{
    call: nil, // InputGroupCall
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
