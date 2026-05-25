---
title: EditFactCheck
description: TL method messages.editFactCheck
---

# messages.editFactCheck

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0589ee75`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `text` | `TextWithEntities` | | 

## Example

```go
result, err := client.Raw(&tg.EditFactCheckRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    text: nil, // TextWithEntities
})
if err != nil {
    panic(err)
}
print(result)
```
