---
title: GetSupportName
description: TL method help.getSupportName
---

# help.getSupportName

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd360e72c`  
Returns: [SupportName](/tl/types#supportname)

## Example

```go
result, err := client.Raw(&tg.GetSupportNameRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
