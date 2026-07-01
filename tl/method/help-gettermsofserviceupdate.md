---
title: GetTermsOfServiceUpdate
description: TL method help.getTermsOfServiceUpdate
---

# help.getTermsOfServiceUpdate

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2ca51fd1`  
Returns: [TermsOfServiceUpdate](/tl/types#termsofserviceupdate)

## Example

```go
result, err := client.Raw(&tg.GetTermsOfServiceUpdateRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
