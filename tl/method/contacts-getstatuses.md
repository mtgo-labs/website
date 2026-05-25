---
title: GetStatuses
description: TL method contacts.getStatuses
---

# contacts.getStatuses

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc4a353ee`  
Returns: [ContactStatus](/tl/types#contactstatus)

## Example

```go
result, err := client.Raw(&tg.GetStatusesRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
