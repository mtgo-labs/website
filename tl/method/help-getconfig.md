---
title: GetConfig
description: TL method help.getConfig
---

# help.getConfig

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc4f9186b`  
Returns: [Config](/tl/types#config)

## Example

```go
result, err := client.Raw(&tg.GetConfigRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
