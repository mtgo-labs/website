---
title: SaveDefaultSendAs
description: TL method phone.saveDefaultSendAs
---

# phone.saveDefaultSendAs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4167add1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `send_as` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.SaveDefaultSendAsRequest{
    call: nil, // InputGroupCall
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
