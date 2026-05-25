---
title: ReadMentions
description: TL method messages.readMentions
---

# messages.readMentions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x36e5bf4d`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ReadMentionsRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
