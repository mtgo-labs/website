---
title: ExportAuthorization
description: TL method auth.exportAuthorization
---

# auth.exportAuthorization

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe5bfffcd`  
Returns: [ExportedAuthorization](/tl/types#exportedauthorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `dc_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ExportAuthorizationRequest{
    dc_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
