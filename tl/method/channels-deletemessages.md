---
title: DeleteMessages
description: TL method channels.deleteMessages
---

# channels.deleteMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x84c1fd4e`  
Returns: [AffectedMessages](/tl/types#affectedmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteMessagesRequest{
    channel: nil, // InputChannel
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
