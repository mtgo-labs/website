---
title: StartScheduledGroupCall
description: TL method phone.startScheduledGroupCall
---

# phone.startScheduledGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5680e342`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.StartScheduledGroupCallRequest{
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
