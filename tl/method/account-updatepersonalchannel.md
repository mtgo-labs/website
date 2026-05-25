---
title: UpdatePersonalChannel
description: TL method account.updatePersonalChannel
---

# account.updatePersonalChannel

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd94305e0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.UpdatePersonalChannelRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
