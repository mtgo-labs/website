---
title: LeaveGroupCallPresentation
description: TL method phone.leaveGroupCallPresentation
---

# phone.leaveGroupCallPresentation

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1c50d144`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.LeaveGroupCallPresentationRequest{
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
