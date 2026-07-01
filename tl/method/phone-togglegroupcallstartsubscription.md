---
title: ToggleGroupCallStartSubscription
description: TL method phone.toggleGroupCallStartSubscription
---

# phone.toggleGroupCallStartSubscription

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x219c34e6`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `subscribed` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleGroupCallStartSubscriptionRequest{
    call: nil, // InputGroupCall
    subscribed: false,
})
if err != nil {
    panic(err)
}
print(result)
```
