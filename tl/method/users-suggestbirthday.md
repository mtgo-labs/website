---
title: SuggestBirthday
description: TL method users.suggestBirthday
---

# users.suggestBirthday

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfc533372`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 
| `birthday` | `Birthday` | | 

## Example

```go
result, err := client.Raw(&tg.SuggestBirthdayRequest{
    id: nil, // InputUser
    birthday: nil, // Birthday
})
if err != nil {
    panic(err)
}
print(result)
```
