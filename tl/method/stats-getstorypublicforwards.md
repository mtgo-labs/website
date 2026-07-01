---
title: GetStoryPublicForwards
description: TL method stats.getStoryPublicForwards
---

# stats.getStoryPublicForwards

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa6437ef6`  
Returns: [PublicForwards](/tl/types#publicforwards)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoryPublicForwardsRequest{
    peer: nil, // InputPeer
    id: 0,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
