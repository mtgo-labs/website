---
title: ReadMessageContents
description: TL method channels.readMessageContents
---

# channels.readMessageContents

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xeab5dc38`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadMessageContentsRequest{
    channel: nil, // InputChannel
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
