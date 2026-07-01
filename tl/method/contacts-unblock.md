---
title: Unblock
description: TL method contacts.unblock
---

# contacts.unblock

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb550d328`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `my_stories_from` | `bool` *(flags.0, optional)* | | 
| `id` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.UnblockRequest{
    my_stories_from: false,
    id: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
