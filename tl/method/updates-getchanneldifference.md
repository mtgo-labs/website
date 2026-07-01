---
title: GetChannelDifference
description: TL method updates.getChannelDifference
---

# updates.getChannelDifference

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x03173d78`  
Returns: [ChannelDifference](/tl/types#channeldifference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `force` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 
| `filter` | `ChannelMessagesFilter` | | 
| `pts` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetChannelDifferenceRequest{
    force: false,
    channel: nil, // InputChannel
    filter: nil, // ChannelMessagesFilter
    pts: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
