---
title: GetSupport
description: TL method help.getSupport
---

# help.getSupport

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9cdf08cd`  
Returns: [Support](/tl/types#support)

## Example

```go
result, err := client.Raw(&tg.GetSupportRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
