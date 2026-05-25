---
title: RestrictSponsoredMessages
description: TL method channels.restrictSponsoredMessages
---

# channels.restrictSponsoredMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9ae91519`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `restricted` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.RestrictSponsoredMessagesRequest{
    channel: nil, // InputChannel
    restricted: false,
})
if err != nil {
    panic(err)
}
print(result)
```
