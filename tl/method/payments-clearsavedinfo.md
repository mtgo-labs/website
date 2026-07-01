---
title: ClearSavedInfo
description: TL method payments.clearSavedInfo
---

# payments.clearSavedInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd83d70c1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `credentials` | `bool` *(flags.0, optional)* | | 
| `info` | `bool` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ClearSavedInfoRequest{
    credentials: false,
    info: false,
})
if err != nil {
    panic(err)
}
print(result)
```
