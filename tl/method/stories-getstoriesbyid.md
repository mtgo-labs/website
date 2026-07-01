---
title: GetStoriesByID
description: TL method stories.getStoriesByID
---

# stories.getStoriesByID

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5774ca74`  
Returns: [Stories](/tl/types#stories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoriesByIDRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
