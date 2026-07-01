---
title: GetRichMessage
description: TL method messages.getRichMessage
---

# messages.getRichMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x501569cf`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetRichMessageRequest{
    peer: nil, // InputPeer
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
