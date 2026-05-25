---
title: AppendTodoList
description: TL method messages.appendTodoList
---

# messages.appendTodoList

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x21a61057`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `list` | `[]TodoItem` | | 

## Example

```go
result, err := client.Raw(&tg.AppendTodoListRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    list: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
