---
title: GetDifference
description: TL method updates.getDifference
---

# updates.getDifference

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x19c2f763`  
Returns: [Difference](/tl/types#difference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pts` | `int32` | | 
| `pts_limit` | `int32` *(flags.1, optional)* | | 
| `pts_total_limit` | `int32` *(flags.0, optional)* | | 
| `date` | `int32` | | 
| `qts` | `int32` | | 
| `qts_limit` | `int32` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetDifferenceRequest{
    pts: 0,
    pts_limit: 0,
    pts_total_limit: 0,
    date: 0,
    qts: 0,
    qts_limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
