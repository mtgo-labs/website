---
title: GetFullChannel
description: TL method channels.getFullChannel
---

# channels.getFullChannel

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x08736a09`  
Returns: [ChatFull](/tl/types#chatfull)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.GetFullChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
