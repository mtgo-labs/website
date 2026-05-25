---
title: SetCallRating
description: TL method phone.setCallRating
---

# phone.setCallRating

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x59ead627`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_initiative` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPhoneCall` | | 
| `rating` | `int32` | | 
| `comment` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SetCallRatingRequest{
    user_initiative: false,
    peer: nil, // InputPhoneCall
    rating: 0,
    comment: "",
})
if err != nil {
    panic(err)
}
print(result)
```
