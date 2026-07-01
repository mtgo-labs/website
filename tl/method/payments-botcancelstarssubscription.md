---
title: BotCancelStarsSubscription
description: TL method payments.botCancelStarsSubscription
---

# payments.botCancelStarsSubscription

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6dfa0622`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `restore` | `bool` *(flags.0, optional)* | | 
| `user_id` | `InputUser` | | 
| `charge_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.BotCancelStarsSubscriptionRequest{
    restore: false,
    user_id: nil, // InputUser
    charge_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
