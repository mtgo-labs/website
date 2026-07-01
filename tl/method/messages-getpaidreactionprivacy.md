---
title: GetPaidReactionPrivacy
description: TL method messages.getPaidReactionPrivacy
---

# messages.getPaidReactionPrivacy

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x472455aa`  
Returns: [Updates](/tl/types#updates)

## Example

```go
result, err := client.Raw(&tg.GetPaidReactionPrivacyRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
