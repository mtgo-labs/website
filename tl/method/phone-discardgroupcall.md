---
title: DiscardGroupCall
description: TL method phone.discardGroupCall
---

# phone.discardGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7a777135`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.DiscardGroupCallRequest{
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
