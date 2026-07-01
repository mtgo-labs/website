---
title: GetStarsGiftOptions
description: TL method payments.getStarsGiftOptions
---

# payments.getStarsGiftOptions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd3c96bc8`  
Returns: [StarsGiftOption](/tl/types#starsgiftoption)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsGiftOptionsRequest{
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
