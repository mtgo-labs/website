---
title: ToggleTodoCompleted
description: TL method messages.toggleTodoCompleted
---

# messages.toggleTodoCompleted

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd3e03124`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `completed` | `[]int32` | | 
| `incompleted` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleTodoCompletedRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    completed: nil,
    incompleted: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
