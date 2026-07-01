---
title: GetDHConfig
description: TL method messages.getDhConfig
---

# messages.getDhConfig

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x26cf8950`  
Returns: [DHConfig](/tl/types#dhconfig)

## Parameters

| Name | Type | Description |
|---|---|---|
| `version` | `int32` | | 
| `random_length` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetDHConfigRequest{
    version: 0,
    random_length: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
