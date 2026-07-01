---
title: UpdateProfile
description: TL method account.updateProfile
---

# account.updateProfile

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x78515775`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `first_name` | `string` *(flags.0, optional)* | | 
| `last_name` | `string` *(flags.1, optional)* | | 
| `about` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateProfileRequest{
    first_name: "",
    last_name: "",
    about: "",
})
if err != nil {
    panic(err)
}
print(result)
```
