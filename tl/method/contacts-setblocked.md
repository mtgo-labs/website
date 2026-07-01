---
title: SetBlocked
description: TL method contacts.setBlocked
---

# contacts.setBlocked

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x94c65c76`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `my_stories_from` | `bool` *(flags.0, optional)* | | 
| `id` | `[]InputPeer` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetBlockedRequest{
    my_stories_from: false,
    id: nil,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
