---
title: CheckGroupCall
description: TL method phone.checkGroupCall
---

# phone.checkGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb59cf977`  
Returns: [Int](/tl/types#int)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `sources` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.CheckGroupCallRequest{
    call: nil, // InputGroupCall
    sources: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
