---
title: GetCallConfig
description: TL method phone.getCallConfig
---

# phone.getCallConfig

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x55451fa9`  
Returns: [DataJSON](/tl/types#datajson)

## Example

```go
result, err := client.Raw(&tg.GetCallConfigRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
