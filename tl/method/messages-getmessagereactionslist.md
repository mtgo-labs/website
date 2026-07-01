---
title: GetMessageReactionsList
description: TL method messages.getMessageReactionsList
---

# messages.getMessageReactionsList

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x461b3f48`  
Returns: [MessageReactionsList](/tl/types#messagereactionslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `reaction` | `Reaction` *(flags.0, optional)* | | 
| `offset` | `string` *(flags.1, optional)* | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessageReactionsListRequest{
    peer: nil, // InputPeer
    id: 0,
    reaction: nil, // Reaction
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
