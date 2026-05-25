---
title: UpdateBirthday
description: TL method account.updateBirthday
---

# account.updateBirthday

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcc6e0c11`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `birthday` | `Birthday` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBirthdayRequest{
    birthday: nil, // Birthday
})
if err != nil {
    panic(err)
}
print(result)
```
