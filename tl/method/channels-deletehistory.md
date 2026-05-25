---
title: DeleteHistory
description: TL method channels.deleteHistory
---

# channels.deleteHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9baa9647`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_everyone` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteHistoryRequest{
    for_everyone: false,
    channel: nil, // InputChannel
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
