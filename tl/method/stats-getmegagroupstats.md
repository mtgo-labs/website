---
title: GetMegagroupStats
description: TL method stats.getMegagroupStats
---

# stats.getMegagroupStats

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdcdf8607`  
Returns: [MegagroupStats](/tl/types#megagroupstats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dark` | `bool` *(flags.0, optional)* | | 
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.GetMegagroupStatsRequest{
    dark: false,
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
