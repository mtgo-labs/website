---
title: GetCDNConfig
description: TL method help.getCdnConfig
---

# help.getCdnConfig

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x52029342`  
Returns: [CDNConfig](/tl/types#cdnconfig)

## Example

```go
result, err := client.Raw(&tg.GetCDNConfigRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
