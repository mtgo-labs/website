---
title: GetContactSignUpNotification
description: TL method account.getContactSignUpNotification
---

# account.getContactSignUpNotification

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9f07c728`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.GetContactSignUpNotificationRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
