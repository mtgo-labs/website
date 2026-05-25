---
title: SetContactSignUpNotification
description: TL method account.setContactSignUpNotification
---

# account.setContactSignUpNotification

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcff43f61`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SetContactSignUpNotificationRequest{
    silent: false,
})
if err != nil {
    panic(err)
}
print(result)
```
