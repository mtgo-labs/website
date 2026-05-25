---
title: GetGroupCallStreamChannels
description: TL method phone.getGroupCallStreamChannels
---

# phone.getGroupCallStreamChannels

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1ab21940`  
Returns: [GroupCallStreamChannels](/tl/types#groupcallstreamchannels)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallStreamChannelsRequest{
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
