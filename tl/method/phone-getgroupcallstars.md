---
title: GetGroupCallStars
description: TL method phone.getGroupCallStars
---

# phone.getGroupCallStars

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6f636302`  
Returns: [GroupCallStars](/tl/types#groupcallstars)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallStarsRequest{
    call: nil, // InputGroupCall
})
if err != nil {
    panic(err)
}
print(result)
```
