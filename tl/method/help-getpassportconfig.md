---
title: GetPassportConfig
description: TL method help.getPassportConfig
---

# help.getPassportConfig

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc661ad08`  
Returns: [PassportConfig](/tl/types#passportconfig)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPassportConfigRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
