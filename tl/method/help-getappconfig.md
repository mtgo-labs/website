---
title: GetAppConfig
description: TL method help.getAppConfig
---

# help.getAppConfig

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x61e3f854`  
Returns: [AppConfig](/tl/types#appconfig)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetAppConfigRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
