---
title: GetDefaultHistoryTTL
description: TL method messages.getDefaultHistoryTTL
---

# messages.getDefaultHistoryTTL

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x658b7188`  
Returns: [DefaultHistoryTTL](/tl/types#defaulthistoryttl)

## Example

```go
result, err := client.Raw(&tg.GetDefaultHistoryTTLRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
