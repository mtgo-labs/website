---
title: ImportAuthorization
description: TL method auth.importAuthorization
---

# auth.importAuthorization

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa57a7dad`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `int64` | | 
| `bytes` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ImportAuthorizationRequest{
    id: 0,
    bytes: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
