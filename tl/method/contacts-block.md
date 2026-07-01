---
title: Block
description: TL method contacts.block
---

# contacts.block

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2e2e8734`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `my_stories_from` | `bool` *(flags.0, optional)* | | 
| `id` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.BlockRequest{
    my_stories_from: false,
    id: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
