---
title: ExportContactToken
description: TL method contacts.exportContactToken
---

# contacts.exportContactToken

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf8654027`  
Returns: [ExportedContactToken](/tl/types#exportedcontacttoken)

## Example

```go
result, err := client.Raw(&tg.ExportContactTokenRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
