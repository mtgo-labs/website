---
title: GetStoryStats
description: TL method stats.getStoryStats
---

# stats.getStoryStats

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x374fef40`  
Returns: [StoryStats](/tl/types#storystats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStoryStatsRequest{
    dark: false,
    peer: nil, // InputPeer
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
